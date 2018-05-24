import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './routes/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <RootRouter />
, document.getElementById('root'));
registerServiceWorker();
// 模块热替换的 API
if (module.hot) {
module.hot.accept('./routes/index', () => {
      ReactDOM.render(RootRouter);
    }
  );
}
