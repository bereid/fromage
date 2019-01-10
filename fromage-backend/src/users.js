const db = require('mongo-db'); // or whatever

const users = {};

users.getUsers = () => db.getUsers();

users.getToken = (username, googleToken, picture = '') => {
  const currentUser = db.getUserByName(username);
  if (currentUser) {
    return currentUser.tokenAuth;
  }
  db.saveUser(username, newToken, picture);
  return newToken;
};

module.exports = users;
