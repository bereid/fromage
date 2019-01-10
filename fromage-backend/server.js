"use strict";

const workshops = require('./src/workshops');
const users = require('./src/users');
const mongoose = require("mongoose");
const express = require("express");
const password = require("./password");

const app = express();
const Data = require("./data");
const PORT = 4444;

let db = mongoose.connection;

const dbRoute = `mongodb://fromageGuysandFruzsi:${password}@ds131721.mlab.com:31721/fromage-db`;

app.get("/auth", (req, res) => {
  const userTokenAuth = user.authenticate(
    req.headers.username,
    req.headers.usertokengoogle,
    req.picture
  );
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

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => {
  console.log(`Server iz runna at ${PORT} boiz`);
});
