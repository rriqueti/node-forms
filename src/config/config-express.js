const express = require('express');
const app = express();

//Vamos declarar aqui nossas rotas como uma interface
const routes = require('../routes/index');
app.use('/', routes);

module.exports = app;