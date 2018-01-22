export const PAUSE_CONTRACT = 'PAUSE_CONTRACT';

function requestContractPause() {
  console.log("requesting function pause")
  return {success: true};
}

export function pauseContract() {
  const payload = requestContractPause();

  return {
    type: PAUSE_CONTRACT,
    payload
  }
}
