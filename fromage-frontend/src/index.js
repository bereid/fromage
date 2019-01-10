import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import history from './history';
import LoginScreen from './LoginScreen';
import CreateWSScreen from './CreateWSSCreen';
import DashboardScreen from './DashboardScreen';

ReactDOM.render(
  <Router history={history}>
    <App>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/create" component={CreateWSScreen} />
      <Route path="/dashboard" component={DashboardScreen} />
    </App>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
