const db = require('mongo-db'); // or whatever

const workshops = {};

workshops.getWorkshops = () => db.getWorkshops();

workshops.yourWorkshops = () => db.getWorkshopsByUsername();

module.exports = workshops;
