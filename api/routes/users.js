const router = require('express').Router();
const Users = require('../models/Users');
const { generateToken, validateToken } = require('../config/token');
const { validateAuth } = require('../middlewares/auth');

router.post('/register', (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(200).send(user);
  });
});
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        id:user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        admin:user.admin,
      };
      const token = generateToken(payload);

      res.cookie('token', token);

      res.send(payload);
    });
  });
});

router.get('/me',validateAuth, (req, res) => {
  res.send(req.user);
});
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
});

module.exports = router;
