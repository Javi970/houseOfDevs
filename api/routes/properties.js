const router = require('express').Router();
const Properties = require('../models/Properties');
const { validateAdmin } = require('../middlewares/auth');

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

router.delete('/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.destroy({ where: { id } })
  .then(() => res.status(204).send("Propiedad eliminada"))
  .catch((err) => res.status(400).send(err));
});
router.get("/" ,(req,res)=>{
    Properties.findAll()
    .then((propertie)=>res.status(200).send(propertie))
    .catch((err) => res.status(400).send(err));
    
})

module.exports = router;
