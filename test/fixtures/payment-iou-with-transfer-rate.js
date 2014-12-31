module.exports = {
    "balance_changes" : [
        // This account has a TransferRate set and it `won back` 0.002 dollars
        // it had issued.
        {
          "account": "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW",
          "balance_change": {
            "value": "0.002",
            "currency": "USD",
            "issuer": "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW"
          }
        },
        {
          "account": "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
          "balance_change": {
            "value": "1",
            "currency": "USD",
            "issuer": "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW"
          }
        },
        {
          "account": "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
          "balance_change": {
            "value": "-1.002",
            "currency": "USD",
            "issuer": "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW"
          }
        },
        {
          "account": "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
          "balance_change": {
            "value": "-0.00001",
            "currency": "XRP",
            "issuer": ""
          }
        }
    ],
   "result" : {
      "Account" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
      "Amount" : {
         "currency" : "USD",
         "issuer" : "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW",
         "value" : "1"
      },
      "Destination" : "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
      "Fee" : "10",
      "Flags" : 0,
      "Paths" : [
         [
            {
               "account" : "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW",
               "currency" : "USD",
               "issuer" : "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW",
               "type" : 49,
               "type_hex" : "0000000000000031"
            }
         ]
      ],
      "SendMax" : {
         "currency" : "USD",
         "issuer" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
         "value" : "1.1"
      },
      "Sequence" : 2,
      "SigningPubKey" : "034F4F068EF0213309F68950351877AE70E3DEDD4005640EB403E6EA1B058ECC92",
      "TransactionType" : "Payment",
      "TxnSignature" : "3045022100A5FD65098B2A89E146665A7B0B1DDB8A3009BF9143DF39C8298793CA8C383B97022065A865F8857BB0176056F669D68FF43832B4D43091138D0FE90B02A5AE7538B5",
      "date" : 472640490,
      "hash" : "7A80213991CB1DB432B066477D05BAE570AACC78E4DB936B1F3C6890B7D03A34",
      "inLedger" : 5,
      "ledger_index" : 5,
      "meta" : {
         "AffectedNodes" : [
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-1"
                     },
                     "Flags" : 131072,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
                        "value" : "100"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW",
                        "value" : "0"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "A4019AB3C488E652FA23FBCA00A02867F1026E5B38ED1AB7A54AB5316BDE2B30",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "0"
                     }
                  },
                  "PreviousTxnID" : "4DE75DA3E35466D720CDE71BF9DC247C6EB5F14ECBF434239545193F7E56BE30",
                  "PreviousTxnLgrSeq" : 4
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "98.998"
                     },
                     "Flags" : 65536,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "r32rQHyesiTtdWFU7UJVtff4nCR5SHCbJW",
                        "value" : "0"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
                        "value" : "100"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "E335E5BC7008027A655116E1B102C9B0D2A3256FF9A4900F5CB582E736F6E922",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "100"
                     }
                  },
                  "PreviousTxnID" : "34FAD7C4BD104BF2992D1949F31453218BEDB8487998D6024A91C7877A01A4DE",
                  "PreviousTxnLgrSeq" : 5
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Account" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
                     "Balance" : "999999992",
                     "Flags" : 0,
                     "OwnerCount" : 1,
                     "Sequence" : 3
                  },
                  "LedgerEntryType" : "AccountRoot",
                  "LedgerIndex" : "E616B629A304F27317ED68DF90FE7D75CEB19A3BDCF62A98DB4EF794BB044B4A",
                  "PreviousFields" : {
                     "Balance" : "1000000002",
                     "Sequence" : 2
                  },
                  "PreviousTxnID" : "2398752780B4417E0D19A16DB020E6DF89F84D86D77780117DEBE0638F137E5A",
                  "PreviousTxnLgrSeq" : 4
               }
            }
         ],
         "TransactionIndex" : 2,
         "TransactionResult" : "tesSUCCESS"
      },
      "status" : "success",
      "validated" : true
   }
}
