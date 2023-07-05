export const abi = [
  {
    "type": "event",
    "name": "CharityProjectUpdated",
    "inputs": [
      {
        "type": "uint256",
        "name": "projectId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "bool",
        "name": "isActive",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DonationMade",
    "inputs": [
      {
        "type": "address",
        "name": "donor",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "projectId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FundsDepositedToBeneficiary",
    "inputs": [
      {
        "type": "address",
        "name": "donor",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "projectId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FundsRefunded",
    "inputs": [
      {
        "type": "address",
        "name": "donor",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ProjectApproved",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "projectId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenSpentInStore",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensAllocatedToBeneficiary",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenAmount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensExchangedForMoney",
    "inputs": [
      {
        "type": "address",
        "name": "storeOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenAmount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "addProduct",
    "inputs": [
      {
        "type": "string",
        "name": "productId",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "productName",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "price",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "approveBeneficiaryProject",
    "inputs": [
      {
        "type": "uint256",
        "name": "projectId",
        "internalType": "uint256"
      },
      {
        "type": "bool",
        "name": "approve",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "c",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "OrgName",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "OrgAddress",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "Desc",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "orgBalance",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "checkProjectCompletion",
    "inputs": [
      {
        "type": "uint256",
        "name": "projectId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "cooperativeStore",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "storeName",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "storeOwner",
        "internalType": "address payable"
      },
      {
        "type": "uint256",
        "name": "balance",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "createBeneficiaryAccount",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_rescueInformation",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createCharityProject",
    "inputs": [
      {
        "type": "string",
        "name": "_title",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_desc",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_image",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "_goalAmount",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createCooperativeStore",
    "inputs": [
      {
        "type": "string",
        "name": "_storeName",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createDonorAccount",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createOrganization",
    "inputs": [
      {
        "type": "string",
        "name": "orgName",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "description",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositFunds",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "donateToProject",
    "inputs": [
      {
        "type": "uint256",
        "name": "projectId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getAllProducts",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "productId",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "productName",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct TransparentCharity.Product[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getApprovedProjects",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "beneficiary",
            "internalType": "address payable"
          },
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "title",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "desc",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "image",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "goalAmount",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "currentAmount",
            "internalType": "uint256"
          },
          {
            "type": "bool",
            "name": "isActive",
            "internalType": "bool"
          },
          {
            "type": "address[]",
            "name": "donators",
            "internalType": "address[]"
          },
          {
            "type": "uint256[]",
            "name": "donations",
            "internalType": "uint256[]"
          }
        ],
        "internalType": "struct TransparentCharity.CharityProject[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBeneficiaryBalance",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBeneficiaryDetails",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBeneficiaryTransactionHistory",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCharityProjects",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "beneficiary",
            "internalType": "address payable"
          },
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "title",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "desc",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "image",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "goalAmount",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "currentAmount",
            "internalType": "uint256"
          },
          {
            "type": "bool",
            "name": "isActive",
            "internalType": "bool"
          },
          {
            "type": "address[]",
            "name": "donators",
            "internalType": "address[]"
          },
          {
            "type": "uint256[]",
            "name": "donations",
            "internalType": "uint256[]"
          }
        ],
        "internalType": "struct TransparentCharity.CharityProject[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCooperativeStoreDetails",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "storeName",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "storeOwner",
        "internalType": "address payable"
      },
      {
        "type": "uint256",
        "name": "balance",
        "internalType": "uint256"
      },
      {
        "type": "string[]",
        "name": "productIds",
        "internalType": "string[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDonorAccountBalance",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDonorDetails",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDonorTransactionHistory",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProduct",
    "inputs": [
      {
        "type": "string",
        "name": "productId",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "productId",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "productName",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct TransparentCharity.Product"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectDonators",
    "inputs": [
      {
        "type": "uint256",
        "name": "projectId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectStatus",
    "inputs": [
      {
        "type": "uint256",
        "name": "projectId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "spendTokens",
    "inputs": [
      {
        "type": "string",
        "name": "productId",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "updateRescueInformation",
    "inputs": [
      {
        "type": "string",
        "name": "_rescueInformation",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]