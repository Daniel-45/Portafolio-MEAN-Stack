'use strict'

// Importar el módulo de 'mongoose'
var mongoose = require('mongoose');

// Cargar la configuración de 'express'
var app = require('./app');

// Puerto del servidor
var port = 3700;

// Conexión con la base de datos
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión con la base de datos establecida con éxito!!')

        // Creación del servidor
        app.listen(port, () => {
            console.log('Servidor escuchando en la url: localhost:3700');
        })
    })
    .catch(error => console.log(error));