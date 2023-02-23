//configuracion de la base de datos

const Sequelize = require("sequelize");
const db = new Sequelize("house_of_dev", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
