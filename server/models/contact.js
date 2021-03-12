'use strict'

// Importar 'mongoose' que se encarga de trabajar con los modelos
var mongoose = require('mongoose');

// Definir el Schema del modelo
var Schema = mongoose.Schema;

// Objeto molde para crear nuevos proyectos 'documentos' en la base de datos
// Se pasa como parámetro un objeto JSON
var ContactShcema = Schema({
    name: String,
    surnames: String,
    dateOfBirth: Date,
    phone: String,
    email: String,
    address: String,
    postCode: string
});

module.exports = mongoose.model('Contact', ContactShcema);