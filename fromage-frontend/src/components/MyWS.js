import React from 'react';
import WSCard from './WSCard';
import myMockedWorkshops from '../config/mockedWS';

const styles = {
  myworkshops: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  }
}

const MyWS = () => (
  <div style={styles.myworkshops}>
    {myMockedWorkshops.map((workshop) => (
      <WSCard ws={workshop} />
    ))}
  </div>
);

export default MyWS;