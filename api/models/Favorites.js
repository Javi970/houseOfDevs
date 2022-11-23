const Sequelize = require('sequelize');
const db = require('../db');

class Favorites extends Sequelize.Model {}

Favorites.init(
  {},
  { sequelize: db, modelName: 'favorites' },
);

module.exports = Favorites;