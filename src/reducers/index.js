import { combineReducers } from 'redux';
import ContractDetail from './reducer_contract_detail';

const rootReducer = combineReducers({
  contract: ContractDetail
});

export default rootReducer;
