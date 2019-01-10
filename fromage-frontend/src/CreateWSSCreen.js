import React from 'react';
import CreateWS from './components/CreateWS';

const style = {
  screen: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

const CreateWSScreen = () => (
  <div style={style.screen}>
    <CreateWS />
  </div>
);

export default CreateWSScreen;
