import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../App';
import UserList from '../containers/User/UserList';
import NotFound from '../common/NotFound/NotFound';
import LoginRoutes from './login-route';

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/userList' component={UserList} /> 
          <Route path='/notFound' component={NotFound} />
          <LoginRoutes />
          <Redirect from='' to="/notFound" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;