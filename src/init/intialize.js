import AcmeTokenJson from '../config/AcmeTokenJson';

let acme_contract;
let web3Provider;

export function initialize() {
  if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
    console.log('initialize web3 --> currentProvider');
  } else {
    web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
    console.log('initialize web3 --> http://localhost:8545');
  }
  web3 = new Web3(web3Provider);

  acme_contract = TruffleContract(AcmeTokenJson);
  acme_contract.setProvider(web3Provider);

}

export function getAcmeContract() {
  if (!acme_contract) {
    initialize();
  }

  return acme_contract;
}
