const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');

class Users extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
     return this.hash(password, this.salt)
    .then(newHash =>newHash=== this.password)
  }
}

Users.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
    },
    /* admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }, */
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: 'users' },
);

Users.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
