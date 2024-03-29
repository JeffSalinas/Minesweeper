import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';
import { createStore } from 'redux';
import allReducer from './reducers'
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

