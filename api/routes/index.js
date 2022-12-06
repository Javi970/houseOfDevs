const express = require('express');
const router = express.Router();
const users = require('./users');
const properties = require('./properties');
const favorites = require ("./favorites")


router.use('/users', users);
router.use('/properties', properties);
router.use("/favorites", favorites)


router.use('/', function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
