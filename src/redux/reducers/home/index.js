import { combineReducers } from 'redux';
import login from './login';
import register from './register';

const home = combineReducers({
  login,
  register
});

export default home;
