const Sequelize = require('sequelize');
const db = require('../db');

class Appointment extends Sequelize.Model {}

Appointment.init(
  {
    date: {
      type: Sequelize.TIME,
    }
  },
  { sequelize: db, modelName: 'appointment' },
);

module.exports = Appointment;