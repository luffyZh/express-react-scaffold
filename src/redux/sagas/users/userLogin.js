import { take, call, put, fork } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  RESET_LOGIN_STATUS,
} from '../../../constants/ActionTypes';
import http from '../../../api/http';
import apiUrl from '../../../api/url'; 

export function* userLogin() {
  while(true) {
    const action = yield take(USER_LOGIN);
    try {
      const { data } = yield call(http.post, apiUrl.USER_LOGIN, { username: action.username, password: action.password } );
      if (!data.success) {
        yield put({ type: USER_LOGIN_FAIL, payload: data });
      } else {
        yield put({ type: USER_LOGIN_SUCCESS, payload: data });
      }
    } catch(error) {
      yield put({ type: USER_LOGIN_FAIL, payload: error });
    }
  }
}

export function* resetLoginStatus() {
  while(true) {
    yield take(RESET_LOGIN_STATUS);
  }
}

export default [
  fork(userLogin),
  fork(resetLoginStatus)
];




