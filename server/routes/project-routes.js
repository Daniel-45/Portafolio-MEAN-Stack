'use strict'

// Fichero de configuración de las rutas del controlador 'project'
var express = require('express');
var ProjectController = require('../controllers/project-controller');
var router = express.Router();

// Middleware
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({
    uploadDir: './uploads'
});

// Crear ruta por GET para home
// Acceder al método home del controlador
router.get('/home', ProjectController.home);

// Crear ruta POST para test
// Acceder al método test del controlador
router.get('/test', ProjectController.test);

// Crear ruta POST para save-project
// Acceder al método saveProject del controlador
router.post('/save-project', ProjectController.saveProject);

// Crear ruta GET para get-projects
// Acceder al método getProjects del controlador
router.get('/get-projects', ProjectController.getProjects);

// Crear ruta GET para get-project
// Acceder al método getProject del controlador
router.get('/get-project/:id?', ProjectController.getProject);

// Crear ruta PUT para update-project
// Acceder al método updateProject del controlador
router.put('/update-project/:id?', ProjectController.updateProject);

// Crear ruta DELETE para delete-project
// Acceder al método deleteProject del controlador
router.delete('/delete-project/:id?', ProjectController.deleteProject);

// Crear ruta POST para upload-image
// Acceder al método uploadImage del controlador
router.post('/upload-image/:id', multipartMiddleware,
    ProjectController.uploadImage);

// Crear ruta GET para get-image
// Obtener una imagen de servidor
// router.get('/get-image/:image/', ProjectController.getImageFile);
router.get('/get-image/:image/', ProjectController.getImage);


module.exports = router;

// IMPORTANTE!!
// Cargar esta configuración de rutas en el fichero 'app.js'