# Portafolio

Aplicación creada con MongoDB, Express.js, Angular y Node.js.

## Backend Node.js

En el directorio **server** del proyecto, ejecutar el comando: `npm install`

## Iniciar el servidor

En el directorio **server** del proyecto, ejecutar el comando `npm start`

Ejecuta los comandos definidos en la sección de scripts del archivo **package.json**, se ejecuta **nodemon** cargando el fichero **index.js**

## Frontend Angular

Este proyecto se ha generado con [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Servidor de desarrollo

En el directorio **client** del proyecto, ejecutar el comando `ng serve`

Navegar a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Code scaffolding

Ejecutar `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Ejecutar `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Usar `--prod` para producción.

## Ayuda adicional

Para obtener más ayuda sobre el uso de CLI de angular `ng help` o ve a ver el siguiente enlace [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Imágenes del proyecto

## Sobre mí

!["](/files/about.png)

## Lista de proyectos

!["](/files/list-projects.png)

## Proyectos en la base de datos

Para la persistencia de datos he utilizado una base de datos NoSQL (MongoDB)

!["](/files/documents.png)

## Currículum

!["](/files/curriculum.png)

## Crear un nuevo proyecto

Todos los formularios (formulario para crear o actualizar un proyecto y formulario de contacto) tienen validación para los inputs y el botón de **ENVIAR** está deshabilitado hasta que se introduzca correctamente la información solicitada. 

!["](/files/create-project.png)

Al hacer clic en enviar, si se ha realizado correctamente la petición se guarda el proyecto en la base de datos, se limpia el formulario y aparece un mensaje en la parte superior indicando que el proyecto se ha creado correctamente con un enlace para poder ir a la vista de detalle del proyecto. Si no se ha podido realizar la petición, limpia el formulario y aparece un mensaje en la parte superior indicando que no se ha creado el proyecto.

!["](/files/create-project-send.png)

Si se hace clic en el enlace de la parte superior se muestra la vista de detalle del proyecto.

!["](/files/create-project-view.png)

## Contacto

En esta imagen del formulario de contacto se muestran los mensajes de error para la validación de los campos.

!["](/files/contact-form.png)

## Actualizar un proyecto

Si se hace clic en el botón **EDITAR** de la vista de detalle de un proyecto se muestra un formulario cargado con los datos del proyecto donde se pueden cambiar esos datos.

Igual que en el formulario de crear proyecto, al hacer clic en **ENVIAR** en la parte superior aparece un mensaje indicando el éxito o fracaso al realizar la petición.

Si se ha podido actualizar el proyecto aparece el mensaje indicando que el proyecto se ha actualizado correctamente y un enlace para ir a la vista de detalle del proyecto.

!["](/files/edit-project.png)

## Proyecto actualizado

!["](/files/edit-project-view.png)

## Listado de proyectos con el nuevo proyecto creado

!["](/files/list-projects-web-gourmet.png)

## Eliminar un proyecto

Al hacer clic en un proyecto se muestra la vista de detalles de ese proyecto, si se hace clic en el botón **ELIMINAR** aparece un mensaje pidiendo confirmación para eliminar el proyecto seleccionado, si se vuelve a hacer clic en **ELIMINAR** se elimina el proyecto. Si se hace clic en **CANCELAR** se vuelve a mostrar la vista de detalla con las opciones de **EDITAR** o **ELIMINAR**.

!["](/files/cancel-delete-project.png)
