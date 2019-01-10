const mongoose = require('mongoose');
const password = require("../password");
const dbRoute = `mongodb://fromageGuysandFruzsi:${password}@ds131721.mlab.com:31721/fromage-db`;

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

const users = {};

users.getUsers = () => db.getUsers();

users.getToken = (username, picture = '') => {
  const currentUser = db.getUserByName(username);
  if (currentUser) {
    return currentUser.tokenAuth;
  }
  db.saveUser(username, newToken, picture);
  return newToken;
};

module.exports = users;
