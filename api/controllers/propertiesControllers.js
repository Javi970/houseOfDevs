const Properties = require("../models/Properties");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

//traer una propiedad
const getPropertie = (req, res) => {
  const id = req.params.id;
  Properties.findOne({ where: { id } })
    .then((property) => res.status(200).send(property))
    .catch((err) => res.status(400).send(err));
};

//crear una propiedad
const createPropertie = (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
};

//editar propiedad
const editPropertie = (req, res) => {
  const id = req.params.id;
  Properties.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
};

//borrar propiedad
const deletePropertie = (req, res) => {
  const id = req.params.id;
  Properties.destroy({ where: { id } })
    .then(() => res.status(204).send("Propiedad eliminada"))
    .catch((err) => res.status(400).send(err));
};

//traer todas las propiedades
const getAllProperties = (req, res) => {
  Properties.findAll().then((property) => {
    res.status(200).send(property);
  });
};
//buscar por categoria,pais,zona,direccion
const searchPropertie = (req, res) => {
  Properties.findAll({
    where: {
      [Op.or]: [
        { category: req.params.search },
        { country: req.params.search },
        { district: req.params.search },
        { addres: req.params.search },
      ],
    },
  })
    .then((property) => {
      res.send(property);
    })
    .catch((error) => console.log(error));
};

//filtrar por cantida de ambiente
const searchRoomPropertie = (req, res) => {
  const roomNumber = req.params.roomNumber;
  Properties.findAll({ where: { rooms: roomNumber } })
    .then((property) => res.send(property))
    .catch((error) => console.log(error));
};

//crear un favorito
const addFavorites = (req, res) => {
  const { id } = req.body;
  Properties.findByPk(id)
    .then((property) => {
      property.setUsers(req.user.id);
      res.status(201).send(property);
    })
    .catch((error) => console.log(error));
};

//borrar un favorito
const deleteFavorite = (req, res) => {
  const { id } = req.params;
  Properties.findByPk(id)
    .then((property) => {
      res.status(204).send(property);
      property.removeUsers(req.user.id);
    })
    .catch((error) => console.log(error));
};
module.exports = {
  getPropertie,
  createPropertie,
  editPropertie,
  deletePropertie,
  getAllProperties,
  searchPropertie,
  searchRoomPropertie,
  addFavorites,
  deleteFavorite,
};
