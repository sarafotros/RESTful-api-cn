const apiRouter = require('express').Router()

const {addSubscriber} = require('../controllers/Subscriber')
const {addPlant, indexPlant} = require('../controllers/Pant')

const { addUser, index } = require('../controllers/User')

apiRouter.route('/users')
    .post(addUser)
    .get(index)

apiRouter.route('/subscribers')  
    .post(addSubscriber)

apiRouter.route('/plants')  
    .post(addPlant)
    .get(indexPlant)

module.exports = apiRouter