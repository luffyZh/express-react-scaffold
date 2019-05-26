import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  RESET_LOGIN_STATUS
} from '../../../constants/ActionTypes';
import { OperationStatus } from '../../../constants/ConstTypes';

const initialState = {
  loginMsg: '',
  status: OperationStatus.initial
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        status: OperationStatus.initial
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginMsg: payload.message,
        status: OperationStatus.load_success
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loginMsg: payload.message,
        status: OperationStatus.load_fail
      };
    case RESET_LOGIN_STATUS:
      return initialState;
    default:
      return state;
  }
};

export default login;
