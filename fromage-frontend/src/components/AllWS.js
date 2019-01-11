import React from 'react';
import WSCard from './WSCard';

const styles = {
  myworkshops: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  }
}

const AllWS = ({ ws }) => (
  <div style={styles.myworkshops}>
    {ws.map((workshop) => (
      <WSCard ws={workshop} />
    ))}
  </div>
);

export default AllWS;