const apiUrl = {
  /**
   * 用户注册
   * @method POST
   * @param { username, password, email }
   */
  USER_REGISTER: '/user/register',
  /**
   * 用户登录
   * @method POST 
   * @param { username, password }
   */
  USER_LOGIN: '/user/login',
  /**
   * 获取用户年系列表信息，应该只有管理员才可以查看
   * @method GET
   */
  USER_LIST: '/user/list',
};

export default apiUrl; 