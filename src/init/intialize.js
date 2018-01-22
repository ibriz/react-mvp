import config from '../config/config';
const AcmeTokenArtifact = require('../config/AcmeToken.json');

let acme_contract;
let web3Provider;

export function initialize() {
  if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
    console.log('initialize web3 --> currentProvider');
  } else {
    web3Provider = new Web3.providers.HttpProvider(config.default_test_rpc);
    console.log('initialize web3 --> ' + config.default_test_rpc);
  }

  web3 = new Web3(web3Provider);
  acme_contract = TruffleContract(AcmeTokenArtifact);
  acme_contract.setProvider(web3Provider);
}

export function getAcmeContract() {
  if (!acme_contract) {
    initialize();
  }

  return acme_contract;
}
