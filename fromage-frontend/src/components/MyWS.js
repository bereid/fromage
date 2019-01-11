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

const MyWS = ({ workshop }) => (
  <div style={styles.myworkshops}>
    {workshop.map((myworkshop) => (
      myworkshop.owner === 'berei.daniel' 
      ?
      <WSCard ws={myworkshop} />
      : 
      ''
    ))}
  </div>
);

export default MyWS;