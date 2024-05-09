import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import charReducer from './char/charReducers';
import mobReducer from './mob/mobReducers';

export default combineReducers({
  auth: authReducer,
  char: charReducer,
  mob: mobReducer,
});