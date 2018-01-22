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
        console.error('pause function', err);
        resolve ({error: true});
      })
    })
    .catch((err) => {
      console.error('instance', err);
      reject ({error: true});
    })
  })
}
