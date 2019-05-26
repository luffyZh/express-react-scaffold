import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  RESET_REGISTER_STATUS,
  RESET_LOGIN_STATUS
} from '../../constants/ActionTypes';
// import axios from 'axios';
import http from '../../api/http';

// 用户注册
const userRegister = () => ({
  type: USER_REGISTER
});
const userRegisterSuccess = payload => ({
  type: USER_REGISTER_SUCCESS,
  payload
});
const userRegisterFail = payload => ({
  type: USER_REGISTER_FAIL,
  payload
});
export const resetRegisterStatus = () => ({
  type: RESET_REGISTER_STATUS
});
export const postUserRegister = postData => (dispatch, getState) => {
  dispatch(userRegister());
  return http
    .post('/user/register', postData)
    .then(res => {
      return dispatch(userRegisterSuccess(res.data));
    })
    .catch(error => {
      dispatch(userRegisterFail(error));
    });
};
// 用户登陆
const userLogin = () => ({
  type: USER_LOGIN
});
const userLoginSuccess = payload => ({
  type: USER_LOGIN_SUCCESS,
  payload
});
const userLoginFail = payload => ({
  type: USER_LOGIN_FAIL,
  payload
});
export const resetLoginStatus = () => ({
  type: RESET_LOGIN_STATUS
});
export const postUserLogin = postData => (dispatch, getState) => {
  dispatch(userLogin());
  return http
    .post('/user/login', postData)
    .then(res => {
      if (res.code !== 0) {
        return dispatch(userLoginFail(res));
      }
      return dispatch(userLoginSuccess(res.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(userLoginFail(error));
    });
};
