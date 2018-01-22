import { combineReducers } from 'redux';
import ContractReducer from './reducer_contract_detail';

const rootReducer = combineReducers({
  contract: ContractReducer
});

export default rootReducer;
