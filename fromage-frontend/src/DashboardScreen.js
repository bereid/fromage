import React from 'react';
import MyWS from './components/MyWS';
import { Typography } from '@material-ui/core';

const styles = {
  screen: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0 auto',
  },
  title: {
    marginTop: '3em',
    marginBottom: '3em',
    marginLeft: '1em',
  }
}

const DashboardScreen = () => (
  <div style={styles.screen}>
    <Typography gutterBottom variant="h5" component="h2" style={styles.title}>My Workshops:</Typography>
    <MyWS />
  </div>
);

export default DashboardScreen;
