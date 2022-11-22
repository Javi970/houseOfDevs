const Sequelize = require('sequelize');
const db = require('../db');

class Review extends Sequelize.Model {}

Review.init(
  {
    date: {
      type: Sequelize.TIME,
    },
    comments: {
      type: Sequelize.TEXT,
    },
    rate: {
      type: Sequelize.INTEGER,
    },
  },
  { sequelize: db, modelName: 'review' },
);

module.exports = Review;
