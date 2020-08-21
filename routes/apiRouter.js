const apiRouter = require('express').Router()

const { addUser, index } = require('../controllers/User')

apiRouter.route('/users')
    .post(addUser)
    .get(index)


module.exports = apiRouter