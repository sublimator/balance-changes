/* -------------------------------- REQUIRES -------------------------------- */

var extend = require('extend');
var bn = require('bignumber.js');

/* --------------------------------- HELPERS -------------------------------- */

function drops_to_xrp(dropsString) { return new bn(dropsString).div(1e6); }

function normalize_affected(affected) {
  // ModifiedNode/CreatedNode/DeletedNode
  var affected_type = Object.keys(affected)[0];
  // Unwrap
  var affected = affected[affected_type];
  // Create the state of the node after the tx;
  var finals = affected.NewFields ? affected.NewFields : affected.FinalFields;

  var after_tx = extend({}, finals);
  // Copy all non object fields
  for (var k in affected) {
    var o = affected[k];
    if (typeof o !== 'object') {
      after_tx[k] = o;
    };
  }

  // The LedgerIndex is a field that's only in the metadata
  // mv it to `index`
  after_tx.index = after_tx.LedgerIndex;
  after_tx.LedgerIndex = (void 0);

  if (affected_type === 'CreatedNode') {
    var before_tx = null;
  } else {
    // The PreviousFields object is limited to fields that change, so we start
    // with the state after the tx, and then layer over the changed fields.
    var before_tx = extend({}, after_tx, affected.PreviousFields);
  }

  return {after_tx: after_tx,
          before_tx: before_tx,
          index: after_tx.index,
          is_new: affected_type === 'CreatedNode',
          previous_fields: affected.PreviousFields || {},
          ledger_entry_type: affected.LedgerEntryType};
}

/* ---------------------------------- TALLY --------------------------------- */

function aci_key(account, currency, issuer) {
  return [account, currency, issuer].join(':');
}

function BalanceTally() {
  // A running tally of amounts keyed by account/currency/issuer
  this.amounts = {};
}

BalanceTally.prototype.add = function(holder, currency, issuer, amount) {
  var key = aci_key(holder, currency, issuer);
  var existing = this.amounts[key];

  if (!existing)
    this.amounts[key] = amount;
  else
    this.amounts[key] = existing.plus(amount);
}

BalanceTally.prototype.subtract = function(holder, currency, issuer, amount) {
  this.add(holder, currency, issuer, amount.neg());
}

BalanceTally.prototype.changes_list = function(opts) {
  var result = [];
  var self = this;
  var keys = Object.keys(this.amounts);
  if (opts && opts.sorted) {keys.sort()};

  keys.forEach(function(aci) {
    var balance = self.amounts[aci];
    // We don't care about non changes
    if (!balance.isZero()) {
      aci = aci.split(':');

      result.push ({
        account: aci[0],
        balance_change: {
          value: balance.toString(),
          currency: aci[1],
          issuer: aci[2] || ''
        }
      });
    };
  });

  return result;
}

function tally_root_balances(tally, before_tx, after_tx) {
  function do_tally(fields, opts) {
    if (fields.Balance && fields.Account)
    {
       var operation = opts && opts.negate ? 'subtract' : 'add';
       tally[operation](fields.Account, 'XRP', '',drops_to_xrp(fields.Balance));
    }
  }
  if (before_tx) do_tally(before_tx, {negate: true});
  do_tally(after_tx);
}

function tally_line_balances(tally, before_tx, after_tx) {
  function do_tally(fields, opts) {
    var balance = bn(fields.Balance.value);
    if (balance.isZero()) {
    // Remember for the before_tx fields we subtract amounts so for non-zero to
    // zero, the difference is implied.
    return;
    }

    var currency = fields.Balance.currency;
    // The difference == after_tx -  before_tx
    var operation = opts && opts.negate ? 'subtract' : 'add';
    // DRY it up, for readability
    function record(holder, amount, issuer) {
      tally[operation](holder, currency, issuer, amount);
    }

    var low_account = fields.LowLimit.issuer;
    var hi_account = fields.HighLimit.issuer;

    if (balance.isNegative()) {
     // low account is issuing so has a negative balance of own funds
     record(low_account, balance, low_account);
     // conversely, the high account has a positive balance of the low
     // accounts's currency.
     record(hi_account, balance.neg(), low_account);
    }
    else {
     // this is the alternative to the above block.
     record(low_account, balance, hi_account);
     record(hi_account, balance.neg(), hi_account);
    }
  }
  if (before_tx) do_tally(before_tx, {negate: true});
  do_tally(after_tx);
}

/* ------------------------------- PUBLIC API ------------------------------- */

exports.find_changes = function(meta) {
  var tally = new BalanceTally();

  meta.AffectedNodes.forEach(function(raw_affected) {
    var affected = normalize_affected(raw_affected);

    // An optimisation
    if (
      // If the Balance wasn't changed, there's nothing to see
      !affected.previous_fields.Balance &&
      // unless of course it's a new node
      !affected.is_new) {
      return;
    }

    var before_tx = affected.before_tx;
    var after_tx = affected.after_tx;

    if (affected.ledger_entry_type === 'AccountRoot')
      tally_root_balances(tally, before_tx, after_tx);
    else if (affected.ledger_entry_type === 'RippleState')
      tally_line_balances(tally, before_tx, after_tx);
  });

  return tally.changes_list({sorted:true});
}