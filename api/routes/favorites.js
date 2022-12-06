const router = require('express').Router()
const Favorites = require('../models/Favorites')

router.get('/:id', (req, res) => {
  const id = req.params.id
  Favorites.findAll({ where: { userId: id } })
    .then((response) => res.send(response))
    .catch((err) => console.log(err))
})

router.post('/addFav', async (req, res) => {
  const { userId } = req.body
  const { propertyId } = req.body
  const exists = await Favorites.findOne({ where: { propertyId } })
  if (exists) return res.send(false)
  Favorites.create(userId, propertyId)
    .then((fav) => res.send(fav))
    .catch((err) => console.log(err))
})
router.delete('/deleteFavs', async (req, res) => {
  const { propertyId} = req.body

  const deleteFav = await Favorites.destroy({
    where: {
        propertyId,
    },
  })
  
  if (deleteFav === 0) return res.send(400)
  res.sendStatus(200)
})
module.exports = router
