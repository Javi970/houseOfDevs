const router = require('express').Router();
const Users = require('../models/Users');
const { generateToken, validateToken } = require('../config/token');
const { validateAuth } = require('../middlewares/auth');
const { validateAdmin } = require('../middlewares/auth');

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
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        admin: user.admin,
      };
      const token = generateToken(payload);

      res.cookie('token', token);

      res.send(payload);
    });
  });
});

router.get('/me', validateAuth, (req, res) => {
  res.send(req.user);
});
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
});

router.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  Users.findOne({ where: {id} })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => res.status(400).send(err));
});

router.get('/superAdmin', validateAdmin ,(req, res) => {
  Users.findAll()
    .then((users) => {
      console.log(users)
      res.status(200).send(users);
    })
    .catch((err) => res.status(400).send(err));
});

router.delete('/deleteUser/:id', validateAdmin ,(req, res) => {
  const id = req.params.id
  Users.destroy({where:{id}})
    .then(() => {
      res.status(204).send("User deleted");
    })
    .catch((err) => res.status(400).send(err));
});


module.exports = router;
