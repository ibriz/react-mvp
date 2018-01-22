import {
  check_contract_pause_status
} from '../api/contract_calls';

export const CONTRACT_STATUS = 'CONTRACT_STATUS';

export function pauseContract() {
  const request = check_contract_pause_status();

  return {
    type: CONTRACT_STATUS,
    payload: request
  };
}

export function getContractStatus() {
  const request = check_contract_pause_status();

  return {
    type: CONTRACT_STATUS,
    payload: request
  };
}
