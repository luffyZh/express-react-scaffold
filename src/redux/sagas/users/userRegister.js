import { take, call, put, fork } from 'redux-saga/effects';
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  RESET_REGISTER_STATUS,
} from '../../../constants/ActionTypes';
import http from '../../../api/http';
import apiUrl from '../../../api/url'; 

export function* userRegister() {
  while(true) {
    const action = yield take(USER_REGISTER);
    try {
      const { data } = yield call(http.post, apiUrl.USER_REGISTER, { username: action.username, password: action.password, email: action.email } );
      if (!data.success) {
        yield put({ type: USER_REGISTER_FAIL, payload: data });
      } else {
        yield put({ type: USER_REGISTER_SUCCESS, payload: data });
      }
    } catch(error) {
      yield put({ type: USER_REGISTER_FAIL, payload: error });
    }
  }
}

export function* resetRegisterStatus() {
  while(true) {
    yield take(RESET_REGISTER_STATUS);
  }
}

export default [
  fork(userRegister),
  fork(resetRegisterStatus)
];




