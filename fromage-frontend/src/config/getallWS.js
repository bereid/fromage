import {deliverWS} from '../actions/deliver';

const PORT = 4444;

const getAllWS = dispatch  => {
  fetch(`http://localhost:${PORT}/test`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then(response => {
    response.json().then(json => {
      dispatch(deliverWS(json))
    });
  });
};

export default getAllWS;
