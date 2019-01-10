'use strict';

import workshops from './src/workshops';

const express = require('express');
const app = express();
const PORT = 4444;

app.get('/auth', (req, res) => {
  const userTokenAuth = user.authenticate(req.headers.username,
    req.headers.usertokengoogle, req.picture);
  res.status(userTokenAuth ? 200 : 401);
  res.send(userTokenAuth ? { userTokenAuth, isAdmin } : { error });
});

app.get('/', (req,res) => {

});

app.post('/workshop', (req,res) => {

});

app.get('/user', (req,res) => {

});

app.post('/newuser', (req,res) => {

});

app.listen(PORT, () => {
  console.log(`Server iz runna at ${PORT} boiz`);
});
