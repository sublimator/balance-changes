module.exports = {
  "balance_changes" : [
    {
      "account": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
      "balance_change": {
        "value": "-0.01",
        "currency": "USD",
        "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"
      }
    },
    {
      "account": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
      "balance_change": {
        "value": "-0.012",
        "currency": "XRP",
        "issuer": ""
      }
    },
    {
      "account": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
      "balance_change": {
        "value": "0.01",
        "currency": "USD",
        "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"
      }
    }
  ],
  
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied.",
  "ledger_hash": "F3F1416BF2E813396AB01FAA38E9F1023AC4D2368D94B0D52B2BC603CEEC01C3",
  "ledger_index": 10459371,
  "status": "closed",
  "type": "transaction",
  "validated": true,

  "tx_json": {
    "Account": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
    "Amount": {
      "currency": "USD",
      "issuer": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
      "value": "0.01"
    },
    "Destination": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
    "Fee": "12000",
    "Flags": 2147483648,
    "LastLedgerSequence": 10459379,
    "Sequence": 37,
    "SigningPubKey": "03F16A52EBDCA6EBF5D99828E1E6918C64D45E6F136476A8F4757512FE553D18F0",
    "TransactionType": "Payment",
    "TxnSignature": "3044022031D6AB55CDFD17E06DA0BAD6D6B7DC9B5CA8FFF50405F2FCD3ED8D3893B1835E02200524CC1E7D70AE3F00C9F94405C55EE179C363F534905168AE8B5BA01CF568A0",
    "date": 471644150,
    "hash": "34671C179737CC89E0F8BBAA83C313885ED1733488FC0F3088BAE16A3D9A5B1B"
  },

  "metadata": {
    "AffectedNodes": [
      {
        "ModifiedNode": {
          "FinalFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "1.525330905250352"
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
              "value": "1.535330905250352"
            }
          },
          "PreviousTxnID": "DC061E6F47B1B6E9A496A31B1AF87194B4CB24B2EBF8A59F35E31E12509238BD",
          "PreviousTxnLgrSeq": 10459364
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "0.02"
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
              "issuer": "rLDYrujdKUfVx28T9vRDAbyJ7G2WVXKo4K",
              "value": "1000000000"
            },
            "LowNode": "0000000000000000"
          },
          "LedgerEntryType": "RippleState",
          "LedgerIndex": "AAE13AF5192EFBFD49A8EEE5869595563FEB73228C0B38FED9CC3D20EE74F399",
          "PreviousFields": {
            "Balance": {
              "currency": "USD",
              "issuer": "rrrrrrrrrrrrrrrrrrrrBZbvji",
              "value": "0.01"
            }
          },
          "PreviousTxnID": "DC061E6F47B1B6E9A496A31B1AF87194B4CB24B2EBF8A59F35E31E12509238BD",
          "PreviousTxnLgrSeq": 10459364
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc",
            "Balance": "239555992",
            "Flags": 0,
            "OwnerCount": 1,
            "Sequence": 38
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "E9A39B0BA8703D5FFD05D9EAD01EE6C0E7A15CF33C2C6B7269107BD2BD535818",
          "PreviousFields": {
            "Balance": "239567992",
            "Sequence": 37
          },
          "PreviousTxnID": "DC061E6F47B1B6E9A496A31B1AF87194B4CB24B2EBF8A59F35E31E12509238BD",
          "PreviousTxnLgrSeq": 10459364
        }
      }
    ],
    "TransactionIndex": 2,
    "TransactionResult": "tesSUCCESS"
  }
}
