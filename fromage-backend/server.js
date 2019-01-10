'use strict';

const workshops = require('./src/workshops');
const users = require('./src/users');
const db = require('mongo-db'); // or whatever

const express = require('express');
const app = express();
const PORT = 4444;

app.get('/auth', (req, res) => {
  const userTokenAuth = user.authenticate(req.headers.username,
    req.headers.usertokengoogle, req.picture);
  res.status(userTokenAuth ? 200 : 401);
  res.send(userTokenAuth ? { userTokenAuth, isAdmin } : { error });
});

app.get('/', (req, res) => {
  res.json(workshops.getWorkshops());
});

app.get('/user', (req, res) => {
  res.json(users.getUsers());
});

app.post('/newuser', (req, res) => {
  db.saveUser(userName, GoogleToken, picture, whatever);
});

app.post('/workshop', (req, res) => {
  res.json(workshops.getWorkshopsByUsername());
});

app.listen(PORT, () => {
  console.log(`Server iz runna at ${PORT} boiz`);
});
