import React from 'react';
import Login from './components/Login';

const style = {
  screen: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    background: 'rgb(209,171,16)',
    flexDirection: 'column',
  }
}

const App = () => (
  <div style={style.screen}>
    <Login />
  </div>
);

export default App;
