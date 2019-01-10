const db = require('mongo-db'); // or whatever

const workshops = {};

workshops.getWorkshops = () => db.getWorkshops();

module.exports = workshops;
