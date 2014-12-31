/* -------------------------------- REQUIRES -------------------------------- */

var extend = require('extend');
var bn = require('bignumber.js');

/* --------------------------------- HELPERS -------------------------------- */

var ZERO = new bn(0);
function xrp_to_drops(dropsString) { return new bn(dropsString).div(1e6); }

function normalize_affected(affected) {
  // ModifiedNode/CreatedNode/DeletedNode
  var affected_type = Object.keys(affected)[0];
  // Unwrap
  affected = affected[affected_type];

  // Create the state of the node after the tx;
  var finals = affected.NewFields != null ?
               affected.NewFields : affected.FinalFields;

  after_tx = extend({}, finals);

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
  delete after_tx.LedgerIndex;

  if (affected_type == 'CreatedNode') {
    before_tx = null;
  } else {
    // The PreviousFields object is limited to fields that change, so we start
    // with the state after the tx, and then layer over the changed fields.
    before_tx = extend({}, after_tx, affected.PreviousFields);
  }

  return {after_tx: after_tx,
          before_tx: before_tx,
          index: after_tx.index,
          is_new: affected_type == 'CreatedNode',
          previous_fields: affected.PreviousFields || {},
          ledger_entry_type: affected.LedgerEntryType};
}

/* ---------------------------------- TALLY --------------------------------- */

function aci_key(account, currency, issuer) {
  return [account, currency, issuer].join(':');
}

function Tally() {
  // A running tally of amounts keyed by account/currency/issuer
  this.amounts = {};
}

Tally.prototype.add = function(holder, currency, issuer, amount) {
  if (amount.isZero()) {
    return;
  };

  var key = aci_key(holder, currency, issuer);
  var existing = this.amounts[key];

  if (existing == null)
    this.amounts[key] = amount;
  else
    this.amounts[key] = existing.plus(amount);
}

Tally.prototype.subtract = function(holder, currency, issuer, amount) {
  this.add(holder, currency, issuer, amount.neg());
}

Tally.prototype.changes_list = function(opts) {
  var self = this;
  var keys = Object.keys(this.amounts);
  if (opts && opts.sorted) {keys.sort()};

  return keys.map(function(aci) {
    var balance = self.amounts[aci];
    // We don't care about non changes
    if (balance.isZero()) {
      return null;
    };

    aci = aci.split(':');

    return ({
      account: aci[0],
      balance_change: {
        value: balance.toString(),
        currency: aci[1],
        issuer: aci[2] || ''
      }
    });
  })
  .filter(function(o) {return o != null});
}

function tally_root_balances(tally, before_tx, after_tx) {
  function do_tally(fields, opts) {
    if (fields.Balance != null && fields.Account != null)
    {
       var operation = opts && opts.negate ? 'subtract' : 'add';
       tally[operation](fields.Account, 'XRP', '',xrp_to_drops(fields.Balance));
    }
  }
  if (before_tx) do_tally(before_tx, {negate: true});
  do_tally(after_tx);
}

function tally_line_balances(tally, before_tx, after_tx) {
  function do_tally(fields, opts) {
    if (fields.Balance != null)
    {
       var balance = bn(fields.Balance.value);
       if (balance.isZero()) {
        // nothing to see here
        return;
       }

       var currency = fields.Balance.currency;
       // The difference == After - Before.
       var operation = opts && opts.negate ? 'subtract' : 'add';

       // DRY it up
       function record(holder, amount, issuer) {
          tally[operation](holder, currency, issuer, amount);
       }

       var negatedBalance = balance.neg();
       var lowAccount = fields.LowLimit.issuer;
       var hiAccount = fields.HighLimit.issuer;

       if (balance.isNegative()) {
         record(lowAccount, balance, lowAccount);
         record(hiAccount, negatedBalance, lowAccount);
       }
       else {
         record(lowAccount, balance, hiAccount);
         record(hiAccount, negatedBalance, hiAccount);
       }
    }
  }
  if (before_tx) do_tally(before_tx, {negate: true});
  do_tally(after_tx);
}

/* ------------------------------- PUBLIC API ------------------------------- */

exports.find_changes = function(meta) {
  var tally = new Tally();

  meta.AffectedNodes.forEach(function(raw_affected) {
    var affected = normalize_affected(raw_affected);

    // An optimisation
    if (
      // If the Balance wasn't changed, there's nothing to see
      affected.previous_fields.Balance == null &&
      // unless of course it's a new node
      !affected.is_new) {
      return;
    }

    var before_tx = affected.before_tx;
    var after_tx = affected.after_tx;

    if (affected.ledger_entry_type == 'AccountRoot')
      tally_root_balances(tally, before_tx, after_tx);
    else if (affected.ledger_entry_type == 'RippleState')
      tally_line_balances(tally, before_tx, after_tx);
  });

  return tally.changes_list({sorted:true});
}