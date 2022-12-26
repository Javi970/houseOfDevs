const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');

//metodo de clases
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
      unique:true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull:false
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: 'users' },
);
//metodo de instancia
Users.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
