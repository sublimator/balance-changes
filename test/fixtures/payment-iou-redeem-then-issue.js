module.exports = {
   "balance_changes" : [
      {
        "account": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
        "balance_change": {
          "value": "100",
          "currency": "USD",
          "issuer": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
        }
      },
      {
        "account": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
        "balance_change": {
          "value": "100",
          "currency": "USD",
          "issuer": "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK"
        }
      },
      {
        "account": "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
        "balance_change": {
          "value": "-100",
          "currency": "USD",
          "issuer": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
        }
      },
      {
        "account": "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
        "balance_change": {
          "value": "-100",
          "currency": "USD",
          "issuer": "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK"
        }
      },
      {
        "account": "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
        "balance_change": {
          "value": "-0.00001",
          "currency": "XRP",
          "issuer": ""
        }
      }
    ],
   "result" : {
      "Account" : "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
      "Amount" : {
         "currency" : "USD",
         "issuer" : "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
         "value" : "200"
      },
      "Destination" : "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
      "Fee" : "10",
      "Flags" : 2147483648,
      "Sequence" : 3,
      "SigningPubKey" : "02691AC5AE1C4C333AE5DF8A93BDC495F0EEBFC6DB0DA7EB6EF808F3AFC006E3FE",
      "TransactionType" : "Payment",
      "TxnSignature" : "304402207068EDB074FE388DB198A5D3B51A2846BB937F76F558D2D9245B11A20DFD5DAF022055A5B5D65C637A34C48361AFD0E97780D6FAED98A4221CE0838EE3598C0EECDE",
      "date" : 472374260,
      "hash" : "8EE52E8CC50AB0841A34E755E882BBC50F855A750AC954D7E7050E71672BE77E",
      "inLedger" : 8,
      "ledger_index" : 8,
      "meta" : {
         "AffectedNodes" : [
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "100"
                     },
                     "Flags" : 196608,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
                        "value" : "500"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
                        "value" : "500"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "88DA36A0E2F92E2E3504DC7936FDB719769486A6BE1BEC4F1E3B580538D28B4A",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-100"
                     }
                  },
                  "PreviousTxnID" : "951C7AB715ECF4E2B2254F336D9529783AE924E8B4784884E45EA0697ED78B61",
                  "PreviousTxnLgrSeq" : 7
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Account" : "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
                     "Balance" : "999999970",
                     "Flags" : 0,
                     "OwnerCount" : 1,
                     "Sequence" : 4
                  },
                  "LedgerEntryType" : "AccountRoot",
                  "LedgerIndex" : "DE3BE7FDF6864FB024807B36BFCB4607E7CDA7D4C155C7AFB4B0973D638938BF",
                  "PreviousFields" : {
                     "Balance" : "999999980",
                     "Sequence" : 3
                  },
                  "PreviousTxnID" : "8D380F8548020FAF6CD42D0E9EDA92B51D4D7DDC4327644893CA1F24688F3715",
                  "PreviousTxnLgrSeq" : 6
               }
            }
         ],
         "TransactionIndex" : 0,
         "TransactionResult" : "tesSUCCESS"
      },
      "status" : "success",
      "validated" : true
   }
}
