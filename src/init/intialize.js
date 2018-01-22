import config from '../config/config';
const AcmeTokenJson = require('../config/AcmeToken.json');

let acme_contract;
let web3Provider;
let acme_contract_deployed_instance;

export function initialize() {
  if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
    console.log('initialize web3 --> currentProvider');
  } else {
    web3Provider = new Web3.providers.HttpProvider(config.default_test_rpc);
    console.log('initialize web3 --> ' + config.default_test_rpc);
  }

  web3 = new Web3(web3Provider);

  acme_contract = TruffleContract(AcmeTokenJson);
  acme_contract.setProvider(web3Provider);

  acme_contract.deployed()
  .then((instance) => {
    acme_contract_deployed_instance = instance;
  })
  .catch((err) => {
    console.error('error initializing contract instance', err);
  })

}

export function getAcmeContract() {
  if (!acme_contract) {
    initialize();
  }

  return acme_contract;
}

export function getAcmeDeployedInstance() {
  if (!acme_contract || !acme_contract_deployed_instance) {
    initialize();
  }

  return acme_contract_deployed_instance;
}
