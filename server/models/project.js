'use strict'

// Importar 'mongoose' que se encarga de trabajar con los modelos
var mongoose = require('mongoose');

// Definir el Schema del modelo
var Schema = mongoose.Schema;

// Objeto molde para crear nuevos proyectos 'documentos' en la base de datos
// Se pasa como parámetro un objeto JSON
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    languages: String,
    technologies: String,
    year: Number,
    image: String
});

// Exportar el módulo para poder utilizarlo fuera de este fichero
// Mongoose pone en minúsculas y utiliza el plural 'Project'
module.exports = mongoose.model('Project', ProjectSchema);