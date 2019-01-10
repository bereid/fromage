import React from 'react';
import WSCard from './WSCard';

const PORT = 4444;

const getAllWS = () => {
  fetch(`http://localhost:${PORT}/test`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  },
  ).then(response => {
      response.json().then(json => {
          // console.log(json);
        json.map((workshop) => (
      <WSCard ws={workshop} />
    ));
      });
  });
};

export default getAllWS;