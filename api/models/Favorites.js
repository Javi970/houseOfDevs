const Sequelize = require('sequelize');
const db = require('../db');

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    propertyId:{
      type:Sequelize.INTEGER,
      allowNull:false,
    }
  },
  { sequelize: db, modelName: 'favorites' },
);

module.exports = Favorites;