import React from 'react';
import InputBase from '@material-ui/core/InputBase';

const styleInputBase = {
  background: 'white',
  borderRadius: '5px',
  width: '100%',
  fontSize: '15px',
  height: 50,
  marginBottom: '3em',
};

const Searchfield = () => (
  <InputBase
    placeholder="Search..."
    style={styleInputBase}
    onChange={(event)=>{console.log(event.target.value)}}
  />
);

export default Searchfield;
