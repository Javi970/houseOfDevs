const { Users, Properties } = require("../models/index");
const router = require("express").Router();
const { generateToken } = require("../config/token");
const { validateAuth } = require("../middlewares/auth");
const { validateAdmin } = require("../middlewares/auth");

//register
const register = async (req, res) => {
  const { email } = req.body;
  const exists = await Users.findOne({ where: { email } });
  if (exists === null) {
    Users.create(req.body)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  } else {
    return res.sendStatus(400);
  }
};

//login
const login = async (req, res) => {
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
        phone: user.phone,
      };
      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
};

//logout
const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

//obtener un usuario
const getUser = (req, res) => {
  const id = req.params.id;
  Users.findOne({ where: { id }, include: Properties })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
};

module.exports = { register, login, logout, getUser };
