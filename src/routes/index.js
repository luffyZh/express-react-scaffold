import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configure from '../redux/store/configureStore';
import App from '../App';
import UserList from '../containers/UserList';
import NotFound from '../common/NotFound/NotFound';

const store = configure();
const history = createBrowserHistory();

class RootRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/home' component={App} />
            <Route
              path='/userList'
              component={UserList} 
            /> 
            <Route path='/notFound' component={NotFound} />
            <Redirect from='' to="/notFound" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default RootRouter;