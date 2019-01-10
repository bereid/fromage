import React, { Component } from 'react';
import Login from './components/Login';
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    margin: 300,
  }
}

const App = () => {
  return (
    <Paper style={styles.paper}>
      <p>mizu</p>
      <Login />
    </Paper>
  );
};

export default App;
