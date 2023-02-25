const router = require("express").Router();
const { Users, Properties } = require("../models/index");
const { generateToken } = require("../config/token");
const { validateAuth } = require("../middlewares/auth");
const { validateAdmin } = require("../middlewares/auth");
const {
  register,
  login,
  logout,
  getUser,
} = require("../controllers/userControllers");

//ruta para registrar un usuario
router.post("/register", register);

//ruta para loguear un usuario
router.post("/login", login);

//ruta para la persistencia
router.get("/me", validateAuth, (req, res) => {
  Users.findByPk(req.user.id, { include: Properties }).then((user) => {
    res.send(user);
  });
});

//rutas para el logout
router.post("/logout", logout);

//ruta para obtener un usuario
router.get("/getUser/:id", getUser);

//ruta para mostrar todos los usuarios siendo admin
router.get("/allUsers", validateAdmin, (req, res) => {
  Users.findAll()
    .then((users) => {
      console.log(users);
      res.status(200).send(users);
    })
    .catch((err) => res.status(400).send(err));
});

//ruta para borrar un usuario siendo admin
router.delete("/deleteUser/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id } })
    .then(() => {
      res.status(204).send("User deleted");
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
