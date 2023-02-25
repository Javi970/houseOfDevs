const { Users, Properties } = require("../models/index");
const { generateToken } = require("../config/token");

//register
const register = async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await Users.findOne({ where: { email } });
    if (exists) return res.sendStatus(400);
    const user = await Users.create(req.body);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//login
const login = (req, res) => {
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

//persistencias
const me = (req, res) => {
  Users.findByPk(req.user.id, { include: Properties })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log(err));
};

const allUsers = (req, res) => {
  Users.findAll()
    .then((users) => {
      console.log(users);
      res.status(200).send(users);
    })
    .catch((err) => res.status(400).send(err));
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id } })
    .then(() => {
      res.status(204).send("User deleted");
    })
    .catch((err) => res.status(400).send(err));
};

module.exports = { register, login, logout, getUser, me, allUsers, deleteUser };
