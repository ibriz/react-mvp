module.exports = {
  "contractName": "AcmeToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INITIAL_SUPPLY",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526000600360146101000a81548160ff0219169083151502179055506040805190810160405280600981526020017f41434d45544f4b454e0000000000000000000000000000000000000000000000815250600490805190602001906200006c92919062000129565b506040805190810160405280600381526020017f41434d000000000000000000000000000000000000000000000000000000000081525060059080519060200190620000ba92919062000129565b506002600655600654600a0a6103e8026007553415620000d957600080fd5b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600754600081905550620001d8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016c57805160ff19168380011785556200019d565b828001600101855582156200019d579182015b828111156200019c5782518255916020019190600101906200017f565b5b509050620001ac9190620001b0565b5090565b620001d591905b80821115620001d1576000816000905550600101620001b7565b5090565b90565b6117f380620001e86000396000f3006060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100f6578063095ea7b31461018457806318160ddd146101de57806323b872dd146102075780632ff2e9dc14610280578063313ce567146102a95780633f4ba83a146102d25780635c975abb146102e7578063661884631461031457806370a082311461036e5780638456cb59146103bb5780638da5cb5b146103d057806395d89b4114610425578063a9059cbb146104b3578063d73dd6231461050d578063dd62ed3e14610567578063f2fde38b146105d3575b600080fd5b341561010157600080fd5b61010961060c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014957808201518184015260208101905061012e565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018f57600080fd5b6101c4600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106aa565b604051808215151515815260200191505060405180910390f35b34156101e957600080fd5b6101f16106da565b6040518082815260200191505060405180910390f35b341561021257600080fd5b610266600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106e0565b604051808215151515815260200191505060405180910390f35b341561028b57600080fd5b610293610712565b6040518082815260200191505060405180910390f35b34156102b457600080fd5b6102bc610718565b6040518082815260200191505060405180910390f35b34156102dd57600080fd5b6102e561071e565b005b34156102f257600080fd5b6102fa6107de565b604051808215151515815260200191505060405180910390f35b341561031f57600080fd5b610354600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506107f1565b604051808215151515815260200191505060405180910390f35b341561037957600080fd5b6103a5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610821565b6040518082815260200191505060405180910390f35b34156103c657600080fd5b6103ce61086a565b005b34156103db57600080fd5b6103e361092b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561043057600080fd5b610438610951565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561047857808201518184015260208101905061045d565b50505050905090810190601f1680156104a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104be57600080fd5b6104f3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109ef565b604051808215151515815260200191505060405180910390f35b341561051857600080fd5b61054d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a1f565b604051808215151515815260200191505060405180910390f35b341561057257600080fd5b6105bd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a4f565b6040518082815260200191505060405180910390f35b34156105de57600080fd5b61060a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ad6565b005b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106a25780601f10610677576101008083540402835291602001916106a2565b820191906000526020600020905b81548152906001019060200180831161068557829003601f168201915b505050505081565b6000600360149054906101000a900460ff161515156106c857600080fd5b6106d28383610c2e565b905092915050565b60005481565b6000600360149054906101000a900460ff161515156106fe57600080fd5b610709848484610d20565b90509392505050565b60075481565b60065481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077a57600080fd5b600360149054906101000a900460ff16151561079557600080fd5b6000600360146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600360149054906101000a900460ff1681565b6000600360149054906101000a900460ff1615151561080f57600080fd5b61081983836110df565b905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108c657600080fd5b600360149054906101000a900460ff161515156108e257600080fd5b6001600360146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109e75780601f106109bc576101008083540402835291602001916109e7565b820191906000526020600020905b8154815290600101906020018083116109ca57829003601f168201915b505050505081565b6000600360149054906101000a900460ff16151515610a0d57600080fd5b610a178383611370565b905092915050565b6000600360149054906101000a900460ff16151515610a3d57600080fd5b610a478383611594565b905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b3257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b6e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d5d57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610dab57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e3657600080fd5b610e8882600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461179090919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f1d82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117a990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fef82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461179090919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808311156111f0576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611284565b611203838261179090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156113ad57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156113fb57600080fd5b61144d82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461179090919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506114e282600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117a990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061162582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117a990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600082821115151561179e57fe5b818303905092915050565b60008082840190508381101515156117bd57fe5b80915050929150505600a165627a7a72305820c802dbe100fba9b6f8cd14e100ff2e4f76e9c95272999a370d37568d6de646800029",
  "deployedBytecode": "0x6060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100f6578063095ea7b31461018457806318160ddd146101de57806323b872dd146102075780632ff2e9dc14610280578063313ce567146102a95780633f4ba83a146102d25780635c975abb146102e7578063661884631461031457806370a082311461036e5780638456cb59146103bb5780638da5cb5b146103d057806395d89b4114610425578063a9059cbb146104b3578063d73dd6231461050d578063dd62ed3e14610567578063f2fde38b146105d3575b600080fd5b341561010157600080fd5b61010961060c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014957808201518184015260208101905061012e565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018f57600080fd5b6101c4600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106aa565b604051808215151515815260200191505060405180910390f35b34156101e957600080fd5b6101f16106da565b6040518082815260200191505060405180910390f35b341561021257600080fd5b610266600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106e0565b604051808215151515815260200191505060405180910390f35b341561028b57600080fd5b610293610712565b6040518082815260200191505060405180910390f35b34156102b457600080fd5b6102bc610718565b6040518082815260200191505060405180910390f35b34156102dd57600080fd5b6102e561071e565b005b34156102f257600080fd5b6102fa6107de565b604051808215151515815260200191505060405180910390f35b341561031f57600080fd5b610354600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506107f1565b604051808215151515815260200191505060405180910390f35b341561037957600080fd5b6103a5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610821565b6040518082815260200191505060405180910390f35b34156103c657600080fd5b6103ce61086a565b005b34156103db57600080fd5b6103e361092b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561043057600080fd5b610438610951565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561047857808201518184015260208101905061045d565b50505050905090810190601f1680156104a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104be57600080fd5b6104f3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109ef565b604051808215151515815260200191505060405180910390f35b341561051857600080fd5b61054d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a1f565b604051808215151515815260200191505060405180910390f35b341561057257600080fd5b6105bd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a4f565b6040518082815260200191505060405180910390f35b34156105de57600080fd5b61060a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ad6565b005b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106a25780601f10610677576101008083540402835291602001916106a2565b820191906000526020600020905b81548152906001019060200180831161068557829003601f168201915b505050505081565b6000600360149054906101000a900460ff161515156106c857600080fd5b6106d28383610c2e565b905092915050565b60005481565b6000600360149054906101000a900460ff161515156106fe57600080fd5b610709848484610d20565b90509392505050565b60075481565b60065481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077a57600080fd5b600360149054906101000a900460ff16151561079557600080fd5b6000600360146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600360149054906101000a900460ff1681565b6000600360149054906101000a900460ff1615151561080f57600080fd5b61081983836110df565b905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108c657600080fd5b600360149054906101000a900460ff161515156108e257600080fd5b6001600360146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109e75780601f106109bc576101008083540402835291602001916109e7565b820191906000526020600020905b8154815290600101906020018083116109ca57829003601f168201915b505050505081565b6000600360149054906101000a900460ff16151515610a0d57600080fd5b610a178383611370565b905092915050565b6000600360149054906101000a900460ff16151515610a3d57600080fd5b610a478383611594565b905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b3257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b6e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d5d57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610dab57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e3657600080fd5b610e8882600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461179090919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f1d82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117a990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fef82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461179090919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808311156111f0576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611284565b611203838261179090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156113ad57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156113fb57600080fd5b61144d82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461179090919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506114e282600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117a990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061162582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117a990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600082821115151561179e57fe5b818303905092915050565b60008082840190508381101515156117bd57fe5b80915050929150505600a165627a7a72305820c802dbe100fba9b6f8cd14e100ff2e4f76e9c95272999a370d37568d6de646800029",
  "sourceMap": "89:312:0:-;;;268:5:2;247:26;;;;;;;;;;;;;;;;;;;;129:32:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;165:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;220:1;197:24;;316:8;;310:2;:14;302:4;:23;271:54;;331:67;;;;;;;;509:10:4;501:5;;:18;;;;;;;;;;;;;;;;;;379:14:0;;365:11;:28;;;;89:312;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "89:312:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;129:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;536:136:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;179:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;374:158:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;271:54:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;197:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:2;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;849:179:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1018:107:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:2;;;;;;;;;;;;;;238:20:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;165:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;242:128:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;676:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2301:126:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;834:169:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;129:32:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;536:136:8:-;617:4;416:6:2;;;;;;;;;;;415:7;407:16;;;;;;;;636:31:8;650:8;660:6;636:13;:31::i;:::-;629:38;;536:136;;;;:::o;179:26:7:-;;;;:::o;374:158:8:-;470:4;416:6:2;;;;;;;;;;;415:7;407:16;;;;;;;;489:38:8;508:5;515:3;520:6;489:18;:38::i;:::-;482:45;;374:158;;;;;:::o;271:54:0:-;;;;:::o;197:24::-;;;;:::o;833:87:2:-;654:5:4;;;;;;;;;;;640:19;;:10;:19;;;632:28;;;;;;;;568:6:2;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;849:179:8:-;946:12;416:6:2;;;;;;;;;;;415:7;407:16;;;;;;;;973:50:8;996:8;1006:16;973:22;:50::i;:::-;966:57;;849:179;;;;:::o;1018:107:5:-;1074:15;1104:8;:16;1113:6;1104:16;;;;;;;;;;;;;;;;1097:23;;1018:107;;;:::o;666:85:2:-;654:5:4;;;;;;;;;;;640:19;;:10;:19;;;632:28;;;;;;;;416:6:2;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:4:-;;;;;;;;;;;;;:::o;165:28:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;242:128:8:-;319:4;416:6:2;;;;;;;;;;;415:7;407:16;;;;;;;;338:27:8;353:3;358:6;338:14;:27::i;:::-;331:34;;242:128;;;;:::o;676:169::-;768:12;416:6:2;;;;;;;;;;;415:7;407:16;;;;;;;;795:45:8;818:8;828:11;795:22;:45::i;:::-;788:52;;676:169;;;;:::o;2301:126:9:-;2375:7;2397;:15;2405:6;2397:15;;;;;;;;;;;;;;;:25;2413:8;2397:25;;;;;;;;;;;;;;;;2390:32;;2301:126;;;;:::o;834:169:4:-;654:5;;;;;;;;;;;640:19;;:10;:19;;;632:28;;;;;;;;930:1;910:22;;:8;:22;;;;902:31;;;;;;;;967:8;939:37;;960:5;;;;;;;;;;;939:37;;;;;;;;;;;;990:8;982:5;;:16;;;;;;;;;;;;;;;;;;834:169;:::o;1799:183:9:-;1866:4;1910:6;1878:7;:19;1886:10;1878:19;;;;;;;;;;;;;;;:29;1898:8;1878:29;;;;;;;;;;;;;;;:38;;;;1943:8;1922:38;;1931:10;1922:38;;;1953:6;1922:38;;;;;;;;;;;;;;;;;;1973:4;1966:11;;1799:183;;;;:::o;737:439::-;819:4;854:1;839:17;;:3;:17;;;;831:26;;;;;;;;881:8;:15;890:5;881:15;;;;;;;;;;;;;;;;871:6;:25;;863:34;;;;;;;;921:7;:14;929:5;921:14;;;;;;;;;;;;;;;:26;936:10;921:26;;;;;;;;;;;;;;;;911:6;:36;;903:45;;;;;;;;973:27;993:6;973:8;:15;982:5;973:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;955:8;:15;964:5;955:15;;;;;;;;;;;;;;;:45;;;;1022:25;1040:6;1022:8;:13;1031:3;1022:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1006:8;:13;1015:3;1006:13;;;;;;;;;;;;;;;:41;;;;1082:38;1113:6;1082:7;:14;1090:5;1082:14;;;;;;;;;;;;;;;:26;1097:10;1082:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1053:7;:14;1061:5;1053:14;;;;;;;;;;;;;;;:26;1068:10;1053:26;;;;;;;;;;;;;;;:67;;;;1142:3;1126:28;;1135:5;1126:28;;;1147:6;1126:28;;;;;;;;;;;;;;;;;;1167:4;1160:11;;737:439;;;;;:::o;3603:398::-;3686:4;3698:13;3714:7;:19;3722:10;3714:19;;;;;;;;;;;;;;;:29;3734:8;3714:29;;;;;;;;;;;;;;;;3698:45;;3772:8;3753:16;:27;3749:164;;;3822:1;3790:7;:19;3798:10;3790:19;;;;;;;;;;;;;;;:29;3810:8;3790:29;;;;;;;;;;;;;;;:33;;;;3749:164;;;3876:30;3889:16;3876:8;:12;;:30;;;;:::i;:::-;3844:7;:19;3852:10;3844:19;;;;;;;;;;;;;;;:29;3864:8;3844:29;;;;;;;;;;;;;;;:62;;;;3749:164;3939:8;3918:61;;3927:10;3918:61;;;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;;3918:61;;;;;;;;;;;;;;;;;;3992:4;3985:11;;3603:398;;;;;:::o;437:379:5:-;500:4;535:1;520:17;;:3;:17;;;;512:26;;;;;;;;562:8;:20;571:10;562:20;;;;;;;;;;;;;;;;552:6;:30;;544:39;;;;;;;;676:32;701:6;676:8;:20;685:10;676:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;653:8;:20;662:10;653:20;;;;;;;;;;;;;;;:55;;;;730:25;748:6;730:8;:13;739:3;730:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;714:8;:13;723:3;714:13;;;;;;;;;;;;;;;:41;;;;782:3;761:33;;770:10;761:33;;;787:6;761:33;;;;;;;;;;;;;;;;;;807:4;800:11;;437:379;;;;:::o;2884:257:9:-;2962:4;3006:46;3040:11;3006:7;:19;3014:10;3006:19;;;;;;;;;;;;;;;:29;3026:8;3006:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2974:7;:19;2982:10;2974:19;;;;;;;;;;;;;;;:29;2994:8;2974:29;;;;;;;;;;;;;;;:78;;;;3079:8;3058:61;;3067:10;3058:61;;;3089:7;:19;3097:10;3089:19;;;;;;;;;;;;;;;:29;3109:8;3089:29;;;;;;;;;;;;;;;;3058:61;;;;;;;;;;;;;;;;;;3132:4;3125:11;;2884:257;;;;:::o;584:110:3:-;642:7;669:1;664;:6;;657:14;;;;;;688:1;684;:5;677:12;;584:110;;;;:::o;698:129::-;756:7;771:9;787:1;783;:5;771:17;;806:1;801;:6;;794:14;;;;;;821:1;814:8;;698:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"zeppelin-solidity/contracts/token/PausableToken.sol\";\n\ncontract AcmeToken is PausableToken {\n  string public name = \"ACMETOKEN\";\n  string public symbol = \"ACM\";\n  uint public decimals = 2;\n  //1000 initial supply with 2 decimal places\n  uint256 public INITIAL_SUPPLY =1000 * (10 ** decimals);\n\n\n  function AcmeToken() public {\n    totalSupply = INITIAL_SUPPLY;\n  }\n\n}\n",
  "sourcePath": "/Users/lucky/Desktop/ibriz/acmetoken/contracts/AcmeToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/lucky/Desktop/ibriz/acmetoken/contracts/AcmeToken.sol",
      "exportedSymbols": {
        "AcmeToken": [
          30
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "SourceUnit": 562,
          "absolutePath": "zeppelin-solidity/contracts/token/PausableToken.sol",
          "file": "zeppelin-solidity/contracts/token/PausableToken.sol",
          "scope": 31,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "26:61:0"
      },
      {
        "attributes": {
          "contractDependencies": [
            147,
            301,
            387,
            430,
            459,
            561,
            807
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            30,
            561,
            147,
            301,
            807,
            387,
            430,
            459
          ],
          "name": "AcmeToken",
          "scope": 31
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PausableToken",
                  "referencedDeclaration": 561,
                  "type": "contract PausableToken"
                },
                "id": 3,
                "name": "UserDefinedTypeName",
                "src": "111:13:0"
              }
            ],
            "id": 4,
            "name": "InheritanceSpecifier",
            "src": "111:13:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 30,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 5,
                "name": "ElementaryTypeName",
                "src": "129:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "41434d45544f4b454e",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"ACMETOKEN\"",
                  "value": "ACMETOKEN"
                },
                "id": 6,
                "name": "Literal",
                "src": "150:11:0"
              }
            ],
            "id": 7,
            "name": "VariableDeclaration",
            "src": "129:32:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 30,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 8,
                "name": "ElementaryTypeName",
                "src": "165:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "41434d",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"ACM\"",
                  "value": "ACM"
                },
                "id": 9,
                "name": "Literal",
                "src": "188:5:0"
              }
            ],
            "id": 10,
            "name": "VariableDeclaration",
            "src": "165:28:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 30,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 11,
                "name": "ElementaryTypeName",
                "src": "197:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "32",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 2",
                  "value": "2"
                },
                "id": 12,
                "name": "Literal",
                "src": "220:1:0"
              }
            ],
            "id": 13,
            "name": "VariableDeclaration",
            "src": "197:24:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "INITIAL_SUPPLY",
              "scope": 30,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 14,
                "name": "ElementaryTypeName",
                "src": "271:7:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "31303030",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 1000",
                      "value": "1000"
                    },
                    "id": 15,
                    "name": "Literal",
                    "src": "302:4:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "type": "uint256"
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "**",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 16,
                            "name": "Literal",
                            "src": "310:2:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13,
                              "type": "uint256",
                              "value": "decimals"
                            },
                            "id": 17,
                            "name": "Identifier",
                            "src": "316:8:0"
                          }
                        ],
                        "id": 18,
                        "name": "BinaryOperation",
                        "src": "310:14:0"
                      }
                    ],
                    "id": 19,
                    "name": "TupleExpression",
                    "src": "309:16:0"
                  }
                ],
                "id": 20,
                "name": "BinaryOperation",
                "src": "302:23:0"
              }
            ],
            "id": 21,
            "name": "VariableDeclaration",
            "src": "271:54:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "AcmeToken",
              "payable": false,
              "scope": 30,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 22,
                "name": "ParameterList",
                "src": "349:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 23,
                "name": "ParameterList",
                "src": "359:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 434,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 24,
                            "name": "Identifier",
                            "src": "365:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "uint256",
                              "value": "INITIAL_SUPPLY"
                            },
                            "id": 25,
                            "name": "Identifier",
                            "src": "379:14:0"
                          }
                        ],
                        "id": 26,
                        "name": "Assignment",
                        "src": "365:28:0"
                      }
                    ],
                    "id": 27,
                    "name": "ExpressionStatement",
                    "src": "365:28:0"
                  }
                ],
                "id": 28,
                "name": "Block",
                "src": "359:39:0"
              }
            ],
            "id": 29,
            "name": "FunctionDefinition",
            "src": "331:67:0"
          }
        ],
        "id": 30,
        "name": "ContractDefinition",
        "src": "89:312:0"
      }
    ],
    "id": 31,
    "name": "SourceUnit",
    "src": "0:402:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x82d50ad3c1091866e258fd0f1a7cc9674609d254"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-21T23:15:28.027Z"
}
