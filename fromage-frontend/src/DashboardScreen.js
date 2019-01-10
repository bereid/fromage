import React from 'react';
import MyWS from './components/MyWS';
import AllWS from './components/AllWS';
import { Typography } from '@material-ui/core';
import PastUpcomingWS from './components/PastUpcomingWS';
import myMockedWorkshops from './config/mockedWS';
import Searchfield from './components/Searchfield';

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
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
}

const DashboardScreen = () => (
  <div style={styles.screen}>
    <Typography gutterBottom variant="h5" component="h2" style={styles.title}>My Workshops:</Typography>
    <MyWS />
    <div style={styles.grid}>
        <Typography gutterBottom variant="h5" component="h2" style={styles.title}>Past workshops:</Typography>
        <Typography gutterBottom variant="h5" component="h2" style={styles.title}>Upcoming Workshops:</Typography>
        <PastUpcomingWS ws={myMockedWorkshops} />
        <PastUpcomingWS ws={myMockedWorkshops} />
    </div>
    <Typography gutterBottom variant="h5" component="h2" style={styles.title}>Search Workshops:</Typography>
    <Searchfield />
    <AllWS />
  </div>
);

export default DashboardScreen;
