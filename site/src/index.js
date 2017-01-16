// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import controlApp from './reducers';
// React Redux
import { Provider } from 'react-redux';
// socket
import { chatMiddleware, createSocket } from './socket-io-middleware';

import AppContainer from './AppContainer';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

let store = createStore(controlApp, applyMiddleware(logger, chatMiddleware));
createSocket(store);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
