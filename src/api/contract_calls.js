import { getAcmeContract, getAcmeDeployedInstance } from '../init/intialize';

export function check_contract_pause_status() {
  return new Promise((resolve, reject) => {
    getAcmeDeployedInstance().paused()
    .then((result) => {
      resolve ({paused: result});
    })
    .catch((err) => {
      console.error('status function1 --> ', err);
      reject ({error: true});
    })
  })
}

export function pause_contract() {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.error('get address', error);
        reject({error: true});
      } else {
        if (accounts.length > 0) {
          console.log('accounts', accounts[0])
          console.log('pause call')

          getAcmeDeployedInstance().pause({}, {from: accounts[0]})
          .then((result) => {
            console.log('pause function result -->', result);
            resolve (result);
          })
          .catch((err) => {
            console.error('pause function -->', err);
            reject ({error: true});
          })

        } else {
          console.error('No accounts', accounts);
          reject({error: true})
        }
      }
    })

  })
}
