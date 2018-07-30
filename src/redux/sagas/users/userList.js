import { take, call, put, fork } from 'redux-saga/effects';
import {
  FETCH_ALL_USER_LIST,
  FETCH_ALL_USER_LIST_SUCCESS,
  FETCH_ALL_USER_LIST_FAIL
} from '../../../constants/ActionTypes';
import http from '../../../api/http';
import apiUrl from '../../../api/url'; 

/**
 * 简洁的实际写法, 把worker saga和watcher saga结合在一起。写起来方便
 */
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

/**
 * 合理的官方写法，分离了watcher saga和worker saga
 */
// // worker saga
// export function* getUserList() {
//   try {
//     const { data } = yield call(http.get, apiUrl.USER_LIST);
//     yield put({ type: FETCH_ALL_USER_LIST_SUCCESS, payload: data });
//   } catch(error) {
//     yield put({ type: FETCH_ALL_USER_LIST_FAIL, payload: error });
//   }
// }
// // watcher saga
// export function* watchGetUserList() {
//   yield takeEvery(FETCH_ALL_USER_LIST, getUserList);
// }

export default [
  fork(userList)
];




