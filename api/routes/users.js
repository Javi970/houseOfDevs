const router = require("express").Router();
const { validateAuth } = require("../middlewares/auth");
const { validateAdmin } = require("../middlewares/auth");
const {
  register,
  login,
  logout,
  getUser,
  me,
  allUsers,
  deleteUser,
} = require("../controllers/userControllers");

//ruta para registrar un usuario
router.post("/register", register);

//ruta para loguear un usuario
router.post("/login", login);

//ruta para la persistencia
router.get("/me", validateAuth, me);

//rutas para el logout
router.post("/logout", logout);

//ruta para obtener un usuario
router.get("/getUser/:id", getUser);

//ruta para mostrar todos los usuarios siendo admin
router.get("/allUsers", validateAdmin, allUsers);

//ruta para borrar un usuario siendo admin
router.delete("/deleteUser/:id", validateAdmin, deleteUser);

module.exports = router;
