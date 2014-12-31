module.exports = {
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied.",
  "ledger_hash": "BFD12A293442E8C083A98092C7A8A199A3732B2360643E40BB8704DE3DF8EA5E",
  "ledger_index": 10482869,
  "status": "closed",
  "type": "transaction",
  "validated": true,

  "tx_json": {
    "Account": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
    "Amount": {
      "currency": "USD",
      "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
      "value": "0.02"
    },
    "Destination": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
    "Fee": "12000",
    "Flags": 2147483648,
    "LastLedgerSequence": 10482877,
    "Sequence": 21,
    "SigningPubKey": "039371D0465097AC8F9C02EB60D5599AAD08AADBD623D6D40D642CF2D7C0481B83",
    "TransactionType": "Payment",
    "TxnSignature": "3045022100E718DDE0149F89CF58FAD1847ED7AD9D61D833E07969A71FA7918D2F6D414AAE022041226ADCB68C2B64CA37AAB4C268922F2EE09DFBF8B234B282E9104643C6351D",
    "date": 471747550,
    "hash": "8A3F4CA1D349B4BE896DFDED6B6D0F0DCA4FCA75E082C30A4175813DDB9BCDA6"
  },

  "balance_changes": [
    {
      // tx_json.Destination
      "account": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
      "balance_change": {
        "value": "0.02",
        "currency": "USD",
        "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"
      }
    },
    {
      // tx_json.Account
      "account": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
      "balance_change": {
        "value": "-0.02",
        "currency": "USD",
        "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"
      }
    },
    {
      // tx_json.Account
      "account": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
      "balance_change": {
        // tx_json.Fee
        "value": "-0.012",
        "currency": "XRP",
        "issuer": ""
      }
    }
  ],

  "metadata": {
    "AffectedNodes": [
      {
        "ModifiedNode": {
          "FinalFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "1.545330905250352"
            },
            "Flags": 1114112,
            "HighLimit": {
              "currency": "USD",
              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
              "value": "0"
            },
            "HighNode": "00000000000001E8",
            "LowLimit": {
              "currency": "USD",
              "issuer": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
              "value": "1000000000"
            },
            "LowNode": "0000000000000000"
          },
          "LedgerEntryType": "RippleState",
          "LedgerIndex": "2F323020B4288ACD4066CC64C89DAD2E4D5DFC2D44571942A51C005BF79D6E25",
          "PreviousFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "1.525330905250352"
            }
          },
          "PreviousTxnID": "D1B2B5508585E1BB48E1D76629C59F6368AAB9568457D058486DCC4DCAECCE30",
          "PreviousTxnLgrSeq": 10482855
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Flags": 0,
            "IndexPrevious": "00000000000001F1",
            "Owner": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
            "RootIndex": "6319526CE8F9A8A44D7A870A89DC1B4AD848AA4F066FCB5390A9A268F6E16AEA"
          },
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "58E06162628C5E2292DA172A97573FA5613C4A223810686428BF8431B3D67C58"
        }
      },
      {
        "DeletedNode": {
          "FinalFields": {
            "Flags": 0,
            "Owner": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
            "RootIndex": "84C8F98961F2F10CB1B5C4FB649C18B05A9D3FC20C3A78B75C86CD30D7EAC39C"
          },
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "84C8F98961F2F10CB1B5C4FB649C18B05A9D3FC20C3A78B75C86CD30D7EAC39C"
        }
      },
      {
        "ModifiedNode": {
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "A3C1529122C3DBD6C96B9DF009FF4896023FE6B4E05A508B1E81F3DCD9A6274B",
          "PreviousTxnID": "758E69A2A2F5E7713ACCA70DC82DD89D7B45B9E020A7E19B9312F0C49A8834BA",
          "PreviousTxnLgrSeq": 10482869
        }
      },
      {
        "DeletedNode": {
          "FinalFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "0"
            },
            "Flags": 0,
            "HighLimit": {
              "currency": "USD",
              "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
              "value": "0"
            },
            "HighNode": "00000000000001F2",
            "LowLimit": {
              "currency": "USD",
              "issuer": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
              "value": "0"
            },
            "LowNode": "0000000000000000",
            "PreviousTxnID": "CA491349DAF4D4EB1E5D2EF1DD4BBC84640C22B4C94C3C9AD40B190151A7878B",
            "PreviousTxnLgrSeq": 10482862
          },
          "LedgerEntryType": "RippleState",
          "LedgerIndex": "AAE13AF5192EFBFD49A8EEE5869595563FEB73228C0B38FED9CC3D20EE74F399",
          "PreviousFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "0.02"
            },
            "Flags": 65536
          }
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
            "Balance": "99752302",
            "Flags": 0,
            "OwnerCount": 0,
            "Sequence": 22
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "C24354B286600B8F28E51233B4AC41A3B4DDD0FDC9BCF96BB171573F6B40A4AE",
          "PreviousFields": {
            "Balance": "99764302",
            "OwnerCount": 1,
            "Sequence": 21
          },
          "PreviousTxnID": "CA491349DAF4D4EB1E5D2EF1DD4BBC84640C22B4C94C3C9AD40B190151A7878B",
          "PreviousTxnLgrSeq": 10482862
        }
      }
    ],
    "TransactionIndex": 9,
    "TransactionResult": "tesSUCCESS"
  }
}

