'use strict'

var Project = require('../models/project');
var fs = require('fs'); // Librería FileSystem
var path = require('path');

var controller = {
    home: (request, response) => {
        return response.status(200).send({
            message: "Home de mí API REST"
        });
    },

    test: (request, response) => {
        return response.status(200).send({
            message: "Método o acción test del controlador"
        });
    },
    // Hay que importar el modelo
    // Método para crear y guardar un documento en la base de datos
    saveProject: (request, response) => {
        var project = new Project();

        /// Recoger parámetros que llegan por el body de la petición
        var params = request.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.languages = params.languages;
        project.technologies = params.technologies;
        project.year = params.year;
        project.image = null;

        project.save((error, projectStored) => {
            if (error)
                return response.status(500).send({ message: 'No se ha podido procesar la petición' });

            if (!projectStored)
                return response.status(404).send({ message: 'Proyecto no encontrado' });

            return response.status(200).send({ project: projectStored });
        });
    },
    // Hay que crear la ruta
    // Método que devuelve todos los documentos de la base de datos
    getProjects: (request, response) => {

        Project.find().sort('-year').exec((error, projects) => {

            if (error)
                return response.status(500).send({ message: 'No se ha podido procesar la petición' });

            if (!projects)
                return response.status(404).send({ message: 'No hay proyectos en la base de datos' });

            return response.status(200).send({
                projects
            });
        });
    },
    // Hay que crear la ruta
    // Método que devuelve un documento de la base de datos
    getProject: (request, response) => {

        var projectid = request.params.id;

        Project.findById(projectid, (error, project) => {

            if (projectid == null)
                return response.status(404).send({ message: 'El proyecto con es ID no existe en la base de datos' });

            if (error)
                return response.status(500).send({ message: 'No se ha podido procesar la petición' });

            if (!project)
                return response.status(404).send({ message: 'El proyecto con es ID no existe en la base de datos' });

            return response.status(200).send({
                project
            });
        });
    },
    // Hay que crear la ruta
    // Método que actualiza un documento de la base de datos 
    updateProject: (request, response) => {
        // Recoger un párametro por la URL para indicar el documento
        var projectid = request.params.id;
        var update = request.body; // Objeto completo
        // Le paso como parámetros el id y el objeto update
        Project.findByIdAndUpdate(projectid, update, { new: true }, (error, projectUpdate) => {

            if (error)
                return response.status(500).send({ message: 'No se ha podido procesar la petición' });

            if (!projectUpdate)
                return response.status(404).send({ message: 'No existe el proyecto con ese ID en la base de datos' });

            return response.status(200).send({
                project: projectUpdate
            });
        });
    },
    // Hay que crear la ruta
    // Método que elimina un documento de la base de datos
    deleteProject: (request, response) => {
        // Recoger un párametro por la URL para indicar el documento
        var projectid = request.params.id;

        Project.findByIdAndRemove(projectid, (error, projectRemoved) => {

            if (error)
                return response.status(500).send({ message: 'No se ha podido procesar la petición' });

            if (!projectRemoved)
                return response.status(404).send({ message: 'No existe el proyecto con ese ID en la base de datos' });

            return response.status(200).send({
                project: projectRemoved
            });
        });
    },
    // Hay que crear la ruta y utilizar el módulo 'connect-multiparty'
    // Método que actualiza un documento de la base de datos
    uploadImage: (request, response) => {
        // Recoger un párametro por la URL para indicar el documento
        var projectid = request.params.id;
        var fileName = 'No se ha podido subir el archivo...';

        if (request.files) {
            var filePath = request.files.image.path;
            // Sacar el nombre real del archivo guardado en el disco duro
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extensionSplit = fileName.split('\.') //Extension
            var fileExtension = extensionSplit[1];

            if (fileExtension == 'png' || fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension == 'gif') {

                Project.findByIdAndUpdate(projectid, { image: fileName }, { new: true }, (error, projectUpdate) => {

                    if (error)
                        return response.status(500).send({ message: 'No se ha podido procesar la petición' });

                    if (!projectUpdate)
                        return response.status(404).send({ message: 'No existe el proyecto con ese ID en la base de datos' });

                    return response.status(200).send({
                        files: fileName
                    });
                });
            }
            else {
                // Utilizar librería FileSystem importada al principio del fichero
                fs.unlink(filePath, (_error) => {
                    return response.status(200).send({ message: 'La extensión del fichero no es válida' });
                });
            }

        }
        else {
            return response.status(200).send({ message: fileName });
        }
    },
    // Método para devolver una imagen del backend
    // Hay que importar el objeto Path (módulo de NodeJS)
    getImageFile: (request, response) => {
        var file = request.params.image; // nombre del archivo pasado por la URL
        var pathFile = `../uploads/${file}`; // Ruta
        // Utilizar la librería (fs) para devolver el archivo
        fs.exists(pathFile, (exists) => {
            if (exists) {
                return response.sendFile(path.resolve(pahtFile));
            }
            else {
                return response.status(404).send({
                    message: 'El recurso solicitado no está en el servidor'
                });
            }
        });
    },

    getImage: (request, response) => {
        var file = request.params.image;
        var pathFile = `./uploads/${file}`;
        return response.sendFile(path.resolve(pathFile));
    }

};

module.exports = controller;