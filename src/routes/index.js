import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configure from '../redux/store/configureStore';
import App from '../App';
import UserList from '../containers/User/UserList';
import LoginForm from '../containers/Home/Login';
import RegisterForm from '../containers/Home/Register';
import NotFound from '../common/NotFound/NotFound';

const history = createBrowserHistory();
const store = configure();

class RootRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/userList" component={UserList} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="" to="/notFound" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default RootRouter;
