var express = require('express')
const controller = require('../controllers')

var router = express.Router()

router.post('/restaurants', controller.restaurants.create)
router.get('/restaurants', controller.restaurants.list)
router.delete('/restaurants/:restaurantId', controller.restaurants.destroy)
router.put('/restaurants/:restaurantId', controller.restaurants.update)

router.post('/restaurants/:restaurantId/reviews', controller.reviews.create)
router.get('/restaurants/:restaurantId/reviews', controller.reviews.list, controller.reviews.getRating)
router.post('/restaurants/:restaurantId/meals', controller.meals.create)

router.get('*', (req, res) => res.status(404).send('The page you requested does not exist.'))

module.exports = router
