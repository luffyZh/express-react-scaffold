import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from '../middleware';
import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';

const nextReducer = require('../reducers');

function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;
  // 使用sagaMiddleware
  const sagaMiddleware = createSagaMiddleware();
  const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware,
    logger,
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);
  // 运行所有已被注册的saga,可以把它理解为一个与系统交互的常驻进程
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
export default configure;