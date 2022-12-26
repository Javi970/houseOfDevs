//configuracion de la base de datos

const Sequelize = require("sequelize")
const db = new Sequelize('houseOfDev', null,null, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });
  
  module.exports= db;