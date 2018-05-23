import { createBrowserHistory } from 'history';
import axios from 'axios';

axios.defaults.baseURL = '/api';

const history = createBrowserHistory();

// 拦截请求
axios.interceptors.request.use(request => {
  // const method = request.method.toUpperCase();
  const luffy_jwt_token = window.localStorage.getItem('luffy_jwt_token');
  if (luffy_jwt_token) {
    request.headers.Authorazition = luffy_jwt_token;
  } else {
    console.log('没有token');
    history.push('/login');
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
  return request;
});

// 拦截相应
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.message)   // 返回接口返回的错误信息
  });

export default class http {
  static get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }

  static post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, JSON.stringify(params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      ).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}