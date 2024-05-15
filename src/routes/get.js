// const forms = require('../controllers/forms');

const routes = require('express').Router();

routes.get('/forms', (req, res)=>{
    res.render('../public/forms/index')
});

module.exports = routes;

