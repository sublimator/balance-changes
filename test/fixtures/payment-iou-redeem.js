module.exports = {

   "balance_changes": [
     {
       // it has some money back that was previously issued
       "account": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
       "balance_change": {
         "value": "100",
         "currency": "USD",
         "issuer": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
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
         "issuer" : "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
         "value" : "100"
      },
      "Destination" : "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
      "Fee" : "10",
      "Flags" : 2147483648,
      "Sequence" : 2,
      "SigningPubKey" : "02691AC5AE1C4C333AE5DF8A93BDC495F0EEBFC6DB0DA7EB6EF808F3AFC006E3FE",
      "TransactionType" : "Payment",
      "TxnSignature" : "304402205523DC0073C7F7DB92765367526A7A2CF1B6E2A42C6B102E96F58FC69689CBF60220371264F1472C6694F8453506503351B256722274CE1324E2B3B1885C18485D59",
      "date" : 472366860,
      "hash" : "44AA46A2728AD7A7E856B27D8815D935D174F63CAA60E4BD90C5CC74D440E753",
      "inLedger" : 6,
      "ledger_index" : 6,
      "meta" : {
         "AffectedNodes" : [
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-100"
                     },
                     "Flags" : 131072,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
                        "value" : "500"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
                        "value" : "0"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "88DA36A0E2F92E2E3504DC7936FDB719769486A6BE1BEC4F1E3B580538D28B4A",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-200"
                     }
                  },
                  "PreviousTxnID" : "C0AA2D9C82E68C06F81340B633D36EA983A834F6377FA18139D4EE7AA6A2973D",
                  "PreviousTxnLgrSeq" : 5
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Account" : "rPMh7Pi9ct699iZUTWaytJUoHcJ7cgyziK",
                     "Balance" : "999999980",
                     "Flags" : 0,
                     "OwnerCount" : 1,
                     "Sequence" : 3
                  },
                  "LedgerEntryType" : "AccountRoot",
                  "LedgerIndex" : "DE3BE7FDF6864FB024807B36BFCB4607E7CDA7D4C155C7AFB4B0973D638938BF",
                  "PreviousFields" : {
                     "Balance" : "999999990",
                     "Sequence" : 2
                  },
                  "PreviousTxnID" : "88CD25B9BF28097156E1EA79281994FFD002EE3D3F67E99ED791C38DA3967CB6",
                  "PreviousTxnLgrSeq" : 4
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
