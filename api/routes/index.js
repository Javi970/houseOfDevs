const express = require('express');
const router = express.Router();
const users = require('./users');

router.use('/users', users);

router.use('/', function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
