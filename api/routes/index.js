const express = require('express');
const router = express.Router();
const users = require('./users');
const properties = require('./properties');

router.use('/users', users);
router.use('/properties', properties);


router.use('/', function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
