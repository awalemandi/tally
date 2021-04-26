import authReducer from './authReducer';
import {combineReducers} from 'redux';
import uiReducer from './uiReducer';
import transactionReducer from './transactionReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    transaction: transactionReducer
});

export default rootReducer;