import {PAUSE_CONTRACT} from '../actions/index';

function GetContractStatus() {
  console.log('Getting new contract status');
  return {status: 'PAUSED'};
}

export default function(state=null, action) {
  switch(action.type) {
    case PAUSE_CONTRACT:
      return GetContractStatus();
  }
  return state;
}
