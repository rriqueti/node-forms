const get = require('../controllers/get');

const routes = require('express').Router();

// routes.set('view engine', 'ejs')

routes.get('/', get)

module.exports = routes;

