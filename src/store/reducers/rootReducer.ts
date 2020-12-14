import appReducer from './uiReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export default rootReducer;