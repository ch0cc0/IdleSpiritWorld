import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import charReducer from './char/charReducers';

export default combineReducers({
  auth: authReducer,
  char: charReducer,
});