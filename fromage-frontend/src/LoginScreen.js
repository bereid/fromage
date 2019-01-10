import React from 'react';
import Login from './components/Login';

const style = {
  screen: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

const LoginScreen = () => (
  <div style={style.screen}>
    <Login />
  </div>
);

export default LoginScreen;
