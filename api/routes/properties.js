const router = require('express').Router();
const {Properties} = require('../models/index');
const { validateAdmin,validateAuth } = require('../middlewares/auth');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op


//ruta para traer una propiedad
router.get("/:id" ,(req,res)=>{
  const id = req.params.id
  Properties.findOne({where:{id}})
  .then((property)=>res.status(200).send(property))
  .catch((err) => res.status(400).send(err));
  
})

//ruta para crear una propiedad
router.post('/create', validateAdmin, (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});


//ruta para modificar una propiedad
router.put('/change/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

//ruta para borrar una propiedad
router.delete('/deleteHouse/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.destroy({ where: { id } })
  .then(() => res.status(204).send("Propiedad eliminada"))
  .catch((err) => res.status(400).send(err));
});

//ruta para traer todas las propiedades
router.get('/', (req, res) => {
  Properties.findAll().then((property) => {
    res.status(200).send(property);
  });
});

//ruta para buscar por categoria,pais,zona,direccion
router.get("/search/:search", (req, res) => {
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
});

//ruta para filtrar por ambientes
router.get("/filter/rooms", (req, res) => {
  const { rooms } = req.body;
  Properties.findAll({ where: { rooms: rooms } })
    .then((filter) => {
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

//ruta para ordenar por mayor precio
router.post("/moreValue", (req, res) => {
  Properties.findAll()
    .then((propertys) => {
      propertys.sort((a,b)=>{
        return b.price - a.price
      })
      res.send(propertys)
    })
    .catch((error) => console.log(error));
});

//ruta para ordenar por menor precio
router.post("/lessValue", (req, res) => {
  Properties.findAll()
    .then((propertys) => {
      propertys.sort((a,b)=>{
        return a.price - b.price
      })
      res.send(propertys)
    })
    .catch((error) => console.log(error));
});

//Ruta filtrar por cantida de ambiente
router.get("/rooms/:roomNumber",(req,res)=>{
  const roomNumber = req.params.roomNumber
  Properties.findAll({where:{rooms:roomNumber}})
  .then((property)=>res.send(property))
  .catch((error) => console.log(error));
})

//ruta para crear un favorito en la base de datos
router.post('/addFavorites',validateAuth,(req, res) => {
  const { id } = req.body
    Properties.findByPk(id)
      .then((property) => {
        property.setUsers(req.user.id)
        res.status(201).send(property)
      })
      .catch((error) => console.log(error))
  })

//ruta para borrar un favorito
router.post("/delete/favorites/:id", validateAuth, (req, res) => {
  const { id } = req.params;
    Properties.findByPk(id)
      .then((property) => {
        res.status(204).send(property);
        property.removeUsers(req.user.id);
      })
      .catch((error) => console.log(error));
});

module.exports = router;
