import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './routes/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootRouter />, document.getElementById('root'));
registerServiceWorker();
