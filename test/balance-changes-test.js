assert = require('assert');
changes = require('../src/balance-changes.js');

function alog(o) {
  console.log(JSON.stringify(o, undefined, 2));
}

function make_test(fn, opts) {
  var test_definer = opts && opts.only ? it.only : it;

  test_definer(fn, function() {
    var fixture = require('./fixtures/' + fn);
    var meta = fixture.result ? fixture.result.meta : fixture.metadata;
    var actual = changes.find_changes(meta);
    // dump the fixtures, evaluate, add to the file, z enforces trailing comma
    // alog({balance_changes: actual, z: null});
    assert.deepEqual(fixture.balance_changes, actual);
  })
}

describe('balance-changes.find_changes', function() {
  make_test('payment-iou-destination-no-balance.js');
  make_test('payment-iou-multipath.js');
  make_test('payment-iou-redeem-then-issue.js');
  make_test('payment-iou-redeem.js');
  make_test('payment-iou-spend-full-balance.js');
  make_test('payment-iou-with-transfer-rate.js');
  make_test('payment-iou.js');
  make_test('payment-xrp-create-account.js');
  make_test('trustline-create.js');
  make_test('trustline-delete.js');
  make_test('trustline-set-limit-to-zero.js');
  make_test('trustline-set-limit.js');
})