import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RefDom from './RefDom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RefDom />, document.getElementById('root'));
registerServiceWorker();
