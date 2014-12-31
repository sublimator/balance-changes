module.exports = {
  
   "balance_changes": [
      {
        "account": "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
        "balance_change": {
          "value": "-100",
          "currency": "USD",
          "issuer": "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD"
        }
      },
      {
        "account": "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
        "balance_change": {
          "value": "-100",
          "currency": "USD",
          "issuer": "rJsaPnGdeo7BhMnHjuc3n44Mf7Ra1qkSVJ"
        }
      },
      {
        "account": "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
        "balance_change": {
          "value": "-100",
          "currency": "USD",
          "issuer": "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu"
        }
      },
      {
        "account": "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
        "balance_change": {
          "value": "-0.00001",
          "currency": "XRP",
          "issuer": ""
        }
      },
      {
        "account": "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
        "balance_change": {
          "value": "100",
          "currency": "USD",
          "issuer": "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD"
        }
      },
      {
        "account": "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
        "balance_change": {
          "value": "100",
          "currency": "USD",
          "issuer": "rJsaPnGdeo7BhMnHjuc3n44Mf7Ra1qkSVJ"
        }
      },
      {
        "account": "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
        "balance_change": {
          "value": "100",
          "currency": "USD",
          "issuer": "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu"
        }
      }
    ],

   "result" : {
    
    
      
    
      "Account" : "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
      "Amount" : {
         "currency" : "USD",
         "issuer" : "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
         "value" : "300"
      },
      "Destination" : "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
      "Fee" : "10",
      "Flags" : 0,
      "Paths" : [
         [
            {
               "account" : "rJsaPnGdeo7BhMnHjuc3n44Mf7Ra1qkSVJ",
               "currency" : "USD",
               "issuer" : "rJsaPnGdeo7BhMnHjuc3n44Mf7Ra1qkSVJ",
               "type" : 49,
               "type_hex" : "0000000000000031"
            }
         ],
         [
            {
               "account" : "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
               "currency" : "USD",
               "issuer" : "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
               "type" : 49,
               "type_hex" : "0000000000000031"
            }
         ],
         [
            {
               "account" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
               "currency" : "USD",
               "issuer" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
               "type" : 49,
               "type_hex" : "0000000000000031"
            }
         ]
      ],
      
      
      
      "Sequence" : 4,
      "SigningPubKey" : "0324CAAFA2212D2AEAB9D42D481535614AED486293E1FB1380FF070C3DD7FB4264",
      "TransactionType" : "Payment",
      "TxnSignature" : "3044022007192E2113C236D541BA72FE628F2BDAA467120F3F61F588B63023E4EAE79E06022051813E7809F3DB07B29AEA65D61C1DD1B830C130840A15A67718ADC6FD94C44B",
      "date" : 472608260,
      "hash" : "029E6CF9C7962A324BD52A90732184991309DD964E7E8B2D52CAF138CB92CB29",
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
                        "value" : "0"
                     },
                     "Flags" : 131072,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
                        "value" : "100"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
                        "value" : "0"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "1AC76982771D3660656D83FA7CCE8E833C42DA797BECAAB30F36D6EEF73BE91B",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-100"
                     }
                  },
                  "PreviousTxnID" : "5E732D1DCC74EC0A5658FADC3B0FF7BBDDB83F630A04527A82DB671B04180FAD",
                  "PreviousTxnLgrSeq" : 5
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Account" : "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
                     "Balance" : "999999990",
                     "Flags" : 0,
                     "OwnerCount" : 3,
                     "Sequence" : 5
                  },
                  "LedgerEntryType" : "AccountRoot",
                  "LedgerIndex" : "5302F37F1D9290D8D92A31651FF71531504183695C2C43EC136B1CF4AC7E08FA",
                  "PreviousFields" : {
                     "Balance" : "1000000000",
                     "Sequence" : 4
                  },
                  "PreviousTxnID" : "60357254ABC66B61EA9B13851A2862B55D7B5CF4EBE1D5682E95EBE217037B3A",
                  "PreviousTxnLgrSeq" : 4
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "0"
                     },
                     "Flags" : 131072,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
                        "value" : "100"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rJsaPnGdeo7BhMnHjuc3n44Mf7Ra1qkSVJ",
                        "value" : "0"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "9D9CE283FB821F2A2DA5BCA55DFB2FD7758D129F3060B1F7834B7784AF4CD15C",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-100"
                     }
                  },
                  "PreviousTxnID" : "84EE2961C88A4B87A0F234CDF4C66BB488781DA2FF823814381473B40875C2AA",
                  "PreviousTxnLgrSeq" : 5
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "0"
                     },
                     "Flags" : 131072,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "r4nmQNH4Fhjfh6cHDbvVSsBv7KySbj4cBf",
                        "value" : "100"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
                        "value" : "0"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "C5F104A35DB835AF4A4C4664BCDA57A88873DCEF23DF567485654FAEE5645949",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "-100"
                     }
                  },
                  "PreviousTxnID" : "CC0817117A0C9055E26FB2E482AC0EF8B4321D874D55428F5F22DEAEE18E0931",
                  "PreviousTxnLgrSeq" : 5
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "100"
                     },
                     "Flags" : 65536,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "rJsaPnGdeo7BhMnHjuc3n44Mf7Ra1qkSVJ",
                        "value" : "0"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
                        "value" : "1000"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "CC07E55B7114FAD14663E5BDD16458E3EFA300C2C139E4E0FC9E2635E3D8099E",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "0"
                     }
                  },
                  "PreviousTxnID" : "8A8DE047F4A1886A2A1E8231AE3D66D162BA0ADD00B781CAAFF946F104474E63",
                  "PreviousTxnLgrSeq" : 4
               }
            },
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
                        "issuer" : "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
                        "value" : "1000"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rrnsYgWn13Z28GtRgznrSUsLfMkvsXCZSu",
                        "value" : "0"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "FBCA655A6C287E90234BF96E8CF950B8B0DE4438C95F408A0E55D256EA2A8DD1",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "0"
                     }
                  },
                  "PreviousTxnID" : "CDF04C313E841ACA1103B3E2D360E5EB18236808D281B645A2BC72426FDC8EA6",
                  "PreviousTxnLgrSeq" : 4
               }
            },
            {
               "ModifiedNode" : {
                  "FinalFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "100"
                     },
                     "Flags" : 65536,
                     "HighLimit" : {
                        "currency" : "USD",
                        "issuer" : "rGpeQzUWFu4fMhJHZ1Via5aqFC3A5twZUD",
                        "value" : "0"
                     },
                     "HighNode" : "0000000000000000",
                     "LowLimit" : {
                        "currency" : "USD",
                        "issuer" : "rnYDWQaRdMb5neCGgvFfhw3MBoxmv5LtfH",
                        "value" : "1000"
                     },
                     "LowNode" : "0000000000000000"
                  },
                  "LedgerEntryType" : "RippleState",
                  "LedgerIndex" : "FDBBB8BF83FF697C7F68E67AAA06A9E0774CB2727B53E95E63B6416AF0B1A2A7",
                  "PreviousFields" : {
                     "Balance" : {
                        "currency" : "USD",
                        "issuer" : "rrrrrrrrrrrrrrrrrrrrBZbvji",
                        "value" : "0"
                     }
                  },
                  "PreviousTxnID" : "8BF77D4762500ED72F291B19D75489397EBF23D870C975B33B3C114E54F36740",
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
