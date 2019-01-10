const mongoose = require('mongoose');
const db = mongoose.connection;
const password = require("../password");
const dbRoute = `mongodb://fromageGuysandFruzsi:${password}@ds131721.mlab.com:31721/fromage-db`;

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true}
)

const workshops = {};

workshops.getWorkshops = () => db.getCollection("workshops").find();

workshops.yourWorkshops = () => db.getWorkshopsByUsername();

module.exports = workshops;
