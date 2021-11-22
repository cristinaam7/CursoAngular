//Importacion de las librerias necesarias
const express = require('express');
const cors = require('express');
const path = require('path');
const { dbConnection } = require('./db/config');

//Añadir las variables de entorno del fichero env
//al entorno del javascript
require('dotenv').config();

//console.log( process.env );

//Crear el servidor de express
const app = express();

//Conexion a la base de datos
dbConnection();

//Directorio publico
//Aqui se tendra acceso desde el navegador
app.use(express.static('public'));

//Cors
//Para que se puedan hacer peticiones desde otros dominios
app.use( cors() );

// Configuraciones para el CORS
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Lectura y parseo del body
app.use( express.json() );

//Midleware express
//Configurar rutas
app.use('/api/auth', require('./routes/auth'))

//Manejar el resto de rutas (las de la app que tengo en public)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

//Poner la aplicacion (servidor) escuhando en el puerto 4000
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})
