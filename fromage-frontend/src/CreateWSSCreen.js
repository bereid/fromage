import React from 'react';
import CreateWS from './components/CreateWS';

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

const CreateWSScreen = () => (
  <div style={style.screen}>
    <CreateWS />
  </div>
);

export default CreateWSScreen;
