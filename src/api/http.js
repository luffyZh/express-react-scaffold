import { createBrowserHistory } from 'history';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.baseURL = '/api';

const history = createBrowserHistory();

// 拦截请求
axios.interceptors.request.use(request => {
  // const method = request.method.toUpperCase();
  const luffy_jwt_token = window.localStorage.getItem('luffy_jwt_token');
  if (luffy_jwt_token) {
    request.headers.Authorazition = luffy_jwt_token;
  } else {
    const noAuthArr = ['/user/login', '/user/register'];
    if (noAuthArr.indexOf(request.url) > -1) {
      console.log('无需验证auth');
    } else {
      swal('No Auth!', '登录已超时，请重新登陆。', 'error')
      .then(() => {
        history.push('/login');
        setTimeout(() => {
          window.location.reload();
        }, 0);
      });
    }
  }
  return request;
});

// 拦截相应
axios.interceptors.response.use(
  response => {
    if (response.status === 401) {
      swal('No Auth!', '登录已超时，请重新登陆。', 'error')
      .then(() => {
        history.push('/login');
        setTimeout(() => {
          window.location.reload();
        }, 0);
      });
    }
    if (response.data.token) {
      console.log('token:', response.data.token);
      window.localStorage.setItem('luffy_jwt_token', response.data.token);
    }
    return response;
  },
  error => {
    return Promise.reject(error.message);   // 返回接口返回的错误信息
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
    });
  }

  static post(url, body) {
    return new Promise((resolve, reject) => {
      axios.post(url, body)
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }
}