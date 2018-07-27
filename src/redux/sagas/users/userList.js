import { take, call, put, fork } from 'redux-saga/effects';
import {
  FETCH_ALL_USER_LIST,
  FETCH_ALL_USER_LIST_SUCCESS,
  FETCH_ALL_USER_LIST_FAIL
} from '../../../constants/ActionTypes';
import http from '../../../api/http';
import apiUrl from '../../../api/url'; 

export function* userList() {
  while(true) {
    yield take(FETCH_ALL_USER_LIST);
    try {
      const { data } = yield call(http.get, apiUrl.USER_LIST);
      yield put({ type: FETCH_ALL_USER_LIST_SUCCESS, payload: data });
    } catch(error) {
      yield put({ type: FETCH_ALL_USER_LIST_FAIL, payload: error });
    }
  }
}

export default [
  fork(userList)
];




