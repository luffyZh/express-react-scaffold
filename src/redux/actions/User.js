import {
  FETCH_ALL_USER_LIST,
  FETCH_ALL_USER_LIST_SUCCESS,
  FETCH_ALL_USER_LIST_FAIL
} from '../../constants/ActionTypes';
// import axios from 'axios';
import http from '../../api/http';

// 获取用户列表
const getAllUserList = () => ({
  type: FETCH_ALL_USER_LIST,
});
const getAllUserListSuccess = (payload) => ({
  type: FETCH_ALL_USER_LIST_SUCCESS,
  payload
});
const getAllUserListFail = () => ({
  type: FETCH_ALL_USER_LIST_FAIL
});
export const fetchAllUserList = () => (dispatch) => {
  dispatch(getAllUserList());
  // 获取用户列表
  // 因为设置了proxy的缘故，所以不需要写http://localhost:3003
  // 会自动定向到后端服务器
  return http.get('/user/list')
          .then(res => {
            return dispatch(getAllUserListSuccess(res.data));
          })
          .catch((error) => {
            console.log(error);
            dispatch(getAllUserListFail());
          }); 
};
