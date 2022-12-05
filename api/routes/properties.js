const router = require('express').Router();
const Properties = require('../models/Properties');
const { validateAdmin } = require('../middlewares/auth');

router.get("/:id" ,(req,res)=>{
  const id = req.params.id
  Properties.findOne({where:{id}})
  .then((property)=>res.status(200).send(property))
  .catch((err) => res.status(400).send(err));
  
})

//http://localhost:3001/api/properties/create

router.post('/create', validateAdmin, (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

//http://localhost:3001/api/properties/change/:id

router.put('/change/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

router.delete('/deleteHouse/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.destroy({ where: { id } })
  .then(() => res.status(204).send("Propiedad eliminada"))
  .catch((err) => res.status(400).send(err));
});

router.get('/', (req, res) => {
  Properties.findAll().then((property) => {
    res.status(200).send(property);
  });
});


module.exports = router;
