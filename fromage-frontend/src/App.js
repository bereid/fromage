import React from 'react';
import LoginScreen from './LoginScreen';
import CreateWSScreen from './CreateWSSCreen';
import DashboardScreen from './DashboardScreen';

const style = {
  screen: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

const App = () => (
  <DashboardScreen />
);

export default App;
