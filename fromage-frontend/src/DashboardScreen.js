import React from 'react';
import MyWS from './components/MyWS';

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

const DashboardScreen = () => (
  <div style={style.screen}>
    <MyWS />
  </div>
);

export default DashboardScreen;
