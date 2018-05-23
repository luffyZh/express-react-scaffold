import { combineReducers } from 'redux';
import user from './user/index';
import home from './home/index';

const rootReducer = combineReducers({
  home,
  user
});

export default rootReducer;