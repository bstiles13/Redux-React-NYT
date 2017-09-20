import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers.js';
import Main from './components/Main';

let middleware = applyMiddleware(thunk);
let store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);