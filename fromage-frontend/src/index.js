import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import history from './history';
import LoginScreen from './LoginScreen';
import CreateWSScreen from './CreateWSSCreen';
import DashboardScreenContainer from './DashboardScreenContainer';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/create" component={CreateWSScreen} />
        <Route path="/dashboard" component={DashboardScreenContainer} />
      </App>
    </Provider>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
