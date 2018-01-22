import {
  CONTRACT_STATUS
} from '../actions/index';

export default function(state=null, action) {
  switch(action.type) {
    case CONTRACT_STATUS:
      if (action.payload.error) {
        return {status: 'UNKNOWN'};
      } else {
        if (action.payload.active) {
          return {status: 'UNPAUSED'}
        } else {
          return {status: 'PAUSED'}
        }
      }
  }
  return state;
}