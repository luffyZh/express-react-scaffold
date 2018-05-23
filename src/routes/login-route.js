import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../containers/Home/Login';
import RegisterForm from '../containers/Home/Register';

const LoginRoutes = () => (
  <div>
    <Route path='/login' component={LoginForm} />
    <Route path='/register' component={RegisterForm} />
  </div>
);
export default LoginRoutes;