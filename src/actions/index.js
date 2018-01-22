import {
  check_contract_pause_status,
  pause_contract,
  unpause_contract
} from '../api/contract_calls';

export const CONTRACT_STATUS = 'CONTRACT_STATUS';
export const PAUSE_CONTRACT = 'PAUSE_CONTRACT';

export function getContractStatus() {
  const request = check_contract_pause_status();

  return {
    type: CONTRACT_STATUS,
    payload: request
  };
}

export function pauseContract() {
  const request = pause_contract();

  return {
    type: CONTRACT_STATUS,
    payload: request
  };
}

export function unPauseContract() {
  const request = unpause_contract();

  return {
    type: CONTRACT_STATUS,
    payload: request
  };
}
