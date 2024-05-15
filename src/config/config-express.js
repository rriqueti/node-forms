const express = require('express');
const app = express();

//Vamos declarar aqui nossas rotas como uma interface

app.use('/', require('../routes/get'));

// app.use('/forms', require('../routes/forms'));

module.exports = app;