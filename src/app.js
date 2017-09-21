import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';

let middleware = applyMiddleware(thunk);
let store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);