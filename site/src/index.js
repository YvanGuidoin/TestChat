// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux
import { createStore } from 'redux';
import controlApp from './reducers';
import STATE_TEMP from './state_temp';
// React Redux
import { Provider } from 'react-redux';


let store = createStore(controlApp, STATE_TEMP);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
