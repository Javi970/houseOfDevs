const router = require("express").Router();
const { validateAdmin, validateAuth } = require("../middlewares/auth");
const {
  getPropertie,
  createPropertie,
  editPropertie,
  deletePropertie,
  getAllProperties,
  searchPropertie,
  searchRoomPropertie,
  addFavorites,
  deleteFavorite,
} = require("../controllers/propertiesControllers");

//ruta para traer una propiedad
router.get("/:id", getPropertie);

//ruta para crear una propiedad
router.post("/create", validateAdmin, createPropertie);

//ruta para modificar una propiedad
router.put("/change/:id", validateAdmin, editPropertie);

//ruta para borrar una propiedad
router.delete("/deleteHouse/:id", validateAdmin, deletePropertie);

//ruta para traer todas las propiedades
router.get("/", getAllProperties);

//ruta para buscar por categoria,pais,zona,direccion
router.get("/search/:search", searchPropertie);

//Ruta filtrar por cantida de ambiente
router.get("/rooms/:roomNumber", searchRoomPropertie);

//ruta para crear un favorito en la base de datos
router.post("/addFavorites", validateAuth, addFavorites);

//ruta para borrar un favorito
router.post("/delete/favorites/:id", validateAuth, deleteFavorite);

module.exports = router;
