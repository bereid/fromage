"use strict";

const workshops = require("./src/workshops");
const users = require("./src/users");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const password = require("./password");
const Data = require("./data");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const image2base64 = require('image-to-base64');

const app = express();
const router = express.Router();
const PORT = 4444;

const db = mongoose.connection;
const dbRoute = `mongodb://fromageGuysandFruzsi:${password}@ds131721.mlab.com:31721/fromage-db`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.get("/auth", (req, res) => {
  const userTokenAuth = user.authenticate(
    req.headers.username,
    req.headers.usertokengoogle,
    req.picture
  );
  res.status(userTokenAuth ? 200 : 401);
  res.send(userTokenAuth ? { userTokenAuth, isAdmin } : { error });
});

app.get("/test", (req, res) => {
  MongoClient.connect(dbRoute, (err, database) => {
    let collection = db.collection('workshops');
    collection.find({}).toArray((err, data) => {
      return res.json(data);
    });
  });
});

router.post("/workshop", (req, res) => {
  // let img64 = image2base64(res.body.img);
  MongoClient.connect(dbRoute, (err, database) => {
    let collection = db.collection('workshops');
    collection.insertOne({
      title: req.body.title,
      time_from: req.body.time_from,
      time_to: req.body.time_to,
      location: req.body.location,
      description: req.body.description,
      // img: img64,
      attendees: req.body.attendees,
      max_attendees: req.body.max_attendees,
      whattobring: req.body.whattobring
    })
  });
  res.redirect('/');
});

router.get("/user", (req, res) => {
  res.json(users.getUsers());
});

router.post("/newuser", (req, res) => {
  db.saveUser(userName, GoogleToken, picture, database);
});

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
