import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import { BrowserRouter as Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import { setCurrentUser } from './actions';
import './index.css';
import setAuthToken from './utils/setAuthToken';
import App from './App';

dotenv.config()

const middleware = applyMiddleware(thunk);
const configureStore = (state = {}) => createStore(
  rootReducer,
  state,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const store = configureStore();
const { localStorage } = window;
const jwtToken = localStorage && localStorage.getItem('token');
const decodedToken = jwt.decode(jwtToken);
if (decodedToken) {
  const hasExpired = decodedToken.exp - (Date.now() / 1000) < 0;
  if (!hasExpired) {
    setAuthToken(jwtToken);
    store.dispatch(setCurrentUser(decodedToken));
  } else {
    localStorage.removeItem('token');
  }
}

const app = (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

