'use strict'

// Importar los módulos de 'express' y 'body-parser'
var express = require('express'); // Cargar el objeto express

var bodyParser = require('body-parser'); // Cargar el objeto body-parser

var app = express();

// Cargar archivos de rutas
var projectRoutes = require('./routes/project-routes');

// Middlewares 'métodos que se ejecutan antes de ejecutar la acción de un controlador'
// Utilizar el objeto 'bodyParser' para convertir el dato que llega a un objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
// Configurar cabeceras y cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas
app.use('/api', projectRoutes);

// Exportar el módulo
// La variable 'app' tiene toda la configuración de los middleware, etc...
module.exports = app;