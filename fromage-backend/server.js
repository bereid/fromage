"use strict";

// import password from "./password";

const mongoose = require("mongoose");
const express = require("express");
const password = require("./password");
const app = express();
const Data = require("./data");
const PORT = 4444;

const dbRoute = `mongodb://fromageGuysandFruzsi:${password}@ds131721.mlab.com:31721/fromage-db`;

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/auth", (req, res) => {
  const userTokenAuth = user.authenticate(
    req.headers.username,
    req.headers.usertokengoogle,
    req.picture
  );
  res.status(userTokenAuth ? 200 : 401);
  res.send(userTokenAuth ? { userTokenAuth, isAdmin } : { error });
});

app.get("/", (req, res) => {});

app.post("/workshop", (req, res) => {});

app.get("/user", (req, res) => {});

app.post("/newuser", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server iz runna at ${PORT} boiz`);
});
