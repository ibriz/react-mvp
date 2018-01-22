import {
  CONTRACT_STATUS,
  PAUSE_CONTRACT
} from '../actions/index';

export default function(state=null, action) {
  switch(action.type) {
    case CONTRACT_STATUS:
      if (action.payload.error) {
        return {status: 'UNKNOWN'};
      } else {
        if (action.payload.paused === true) {
          return {status: 'PAUSED'}
        } else if (action.payload.paused === false){
          return {status: 'ACTIVE'}
        } else {
          return {status: 'UNKNOWN'};
        }
      }
    case PAUSE_CONTRACT:
      console.log('error', action.payload);
      return {};
  }
  return state;
}
