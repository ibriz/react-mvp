import { contract_call_interval } from '../config/config';
import { getAcmeContract } from '../init/intialize';

export function check_contract_pause_status() {
  return new Promise((resolve, reject) => {
    getAcmeContract().deployed()
    .then((instance) => {
      instance.paused()
      .then((result) => {
        resolve ({paused: result});
      })
      .catch((err) => {
        console.error('status function1 --> ', err);
        reject ({error: true});
      })
    })
    .catch((err) => {
      console.error('status function1 --> ', err);
      reject ({error: true});
    })
  })
}

export function pause_contract() {
  return new Promise((resolve, reject) => {
    getAcmeContract().deployed()
    .then((instance) => {
      instance.pause()
      .then((result) => {
        console.log('pause function result -->', result);
        setTimeout(() => {
          resolve (check_contract_pause_status());
        }, contract_call_interval);
      })
      .catch((err) => {
        console.error('pause function -->', err);
        reject ({error: true});
      })
    })
    .catch((err) => {
      console.error('pause function1 --> ', err);
      reject ({error: true});
    })

  })
}

export function unpause_contract() {
  return new Promise((resolve, reject) => {
    getAcmeContract().deployed()
    .then((instance) => {
      instance.unpause()
      .then((result) => {
        console.log('unpause function result -->', result);
        setTimeout(() => {
          resolve (check_contract_pause_status());
        }, contract_call_interval);
      })
      .catch((err) => {
        console.error('unpause function -->', err);
        reject ({error: true});
      })
    })
    .catch((err) => {
      console.error('unpause function1 --> ', err);
      reject ({error: true});
    })
  })
}
