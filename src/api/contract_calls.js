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
    getAcmeDeployedInstance().pause()
    .then((result) => {
      console.log('pause function result -->', result);
      resolve (check_contract_pause_status());
    })
    .catch((err) => {
      console.error('pause function -->', err);
      reject ({error: true});
    })
  })
}

export function unpause_contract() {
  return new Promise((resolve, reject) => {
    getAcmeDeployedInstance().unpause()
    .then((result) => {
      console.log('unpause function result -->', result);
      resolve (check_contract_pause_status());
    })
    .catch((err) => {
      console.error('unpause function -->', err);
      reject ({error: true});
    })
  })
}
