const mongoose = require("mongoose");
const password = require("../password");
const dbRoute = `mongodb://fromageGuysandFruzsi:${password}@ds131721.mlab.com:31721/fromage-db`;

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

const workshops = {};

workshops.getWorkshops = () => db.getWorkshops();

workshops.yourWorkshops = () => db.getWorkshopsByUsername();

module.exports = workshops;
