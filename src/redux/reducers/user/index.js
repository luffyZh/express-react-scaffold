import { combineReducers } from 'redux';
import userList from './userList';

const user = combineReducers({
  userList
});

export default user;