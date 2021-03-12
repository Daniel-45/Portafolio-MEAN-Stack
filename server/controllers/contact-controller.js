'use strict'
var Contact = require('../models/contact');

var controller = {

    saveContact: (request, response) => {
        var contact = new Contact();

        /// Recoger parámetros que llegan por el body de la petición
        var params = request.body;
        contact.name = params.name;
        contact.surnames = params.surnames;
        contact.dateOfBirth = params.dateOfBirth;
        contact.phone = params.phone;
        contact.email = params.email;
        contact.address = params.address;
        contact.postCode = params.postCode;

        contact.save((error, contactStored) => {
            if (error)
                return response.status(500).send({ message: 'No se ha podido procesar la petición' });

            if (!contactStored)
                return response.status(404).send({ message: 'Contacto no encontrado' });

            return response.status(200).send({ project: pcontactStored });
        });
    }

};

module.exports = controller;