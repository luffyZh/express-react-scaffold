import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configure from '../redux/store/configureStore';
import App from '../App';
import UserList from '../containers/User/UserList';
import NotFound from '../common/NotFound/NotFound';
import LoginRoutes from './login-route';

const history = createBrowserHistory();
const store = configure();

class RootRouter extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/home' component={App} />
            <Route path='/userList' component={UserList} /> 
            <Route path='/notFound' component={NotFound} />
            <LoginRoutes />
            <Redirect from='' to="/notFound" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default RootRouter;