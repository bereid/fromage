import React from 'react';
import MyWS from './components/MyWS';
import { Typography } from '@material-ui/core';
import PastUpcomingWS from './components/PastUpcomingWS';
import myMockedWorkshops from './config/mockedWS';

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
    <Typography gutterBottom variant="h5" component="h2" style={styles.title}>Past and upcoming:</Typography>
    <PastUpcomingWS ws={myMockedWorkshops} />
  </div>
);

export default DashboardScreen;
