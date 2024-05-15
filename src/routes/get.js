// const forms = require('../public/forms/');

const routes = require('express').Router();

routes.get('/forms', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
});

module.exports = routes;

