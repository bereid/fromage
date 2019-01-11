import React from 'react';
import WSCard from './WSCard';

const styles = {
  allworkshops: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  }
}

const AllWS = ({ ws }) => (
  <div style={styles.allworkshops}>
    {ws.map((workshop) => (
      <WSCard ws={workshop} />
    ))}
  </div>
);

export default AllWS;