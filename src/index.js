import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RefDom from './RefDom';
import Portals from "./Portals";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Portals />, document.getElementById('root'));
registerServiceWorker();
