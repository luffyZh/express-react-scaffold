import React from 'react';
import { Provider } from 'react-redux';
import configure from '../redux/store/configureStore';
import Routes from './routes';

const store = configure();

class RootRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default RootRouter;