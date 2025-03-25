import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {Store} from './store'
import { Provider } from 'react-redux'



ReactDom.render(

  <React.StrictMode>
    <Provider store={Store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
