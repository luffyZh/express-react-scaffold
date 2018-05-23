import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  RESET_REGISTER_STATUS
} from '../../../constants/ActionTypes';
import { OperationStatus } from '../../../constants/OperationStatus';

const initialState = {
  registerMsg: '',
};

const register = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
      return {
        ...state,
        status: OperationStatus.initial
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        registerMsg: payload.msg,
        registerResult: payload.result,
        status: OperationStatus.load_success,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        registerMsg: payload.msg,
        registerResult: payload.result,
        status: OperationStatus.load_fail,
      };
    case RESET_REGISTER_STATUS:
      return initialState;
    default:
      return state;
  }
};

export default register;
