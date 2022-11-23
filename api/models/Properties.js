const Sequelize = require('sequelize');
const db = require('../db');


class Properties extends Sequelize.Model{}

Properties.init(
    {
      category: {
        type: Sequelize.STRING,
        allowNull: false
       
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
        
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
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      rooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
    { sequelize: db, modelName: 'properties' },
  );
  
  module.exports = Properties;