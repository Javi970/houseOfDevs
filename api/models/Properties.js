const Sequelize = require('sequelize');
const db = require('../db');


class Properties extends Sequelize.Model{}

Properties.init(
    {
      category: {
        type: Sequelize.STRING,
       
      },
      title: {
        type: Sequelize.STRING,
        
      },
      addres: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      availability: {
        type: Sequelize.BOOLEAN,
      },
      rooms: {
        type: Sequelize.INTEGER,
      },
    },
    { sequelize: db, modelName: 'properties' },
  );
  
  module.exports = Properties;