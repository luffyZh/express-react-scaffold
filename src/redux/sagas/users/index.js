
import userList from './userList';
import userLogin from './userLogin';
import userRegister from './userRegister';

const userSagas = [
  ...userList,
  ...userLogin,
  ...userRegister,
];

export default userSagas;