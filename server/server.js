const express = require('express');

//importar el paquete
const socketIO = require('socket.io');
const http = require('http'); //modulo que trae node por defecto

const path = require('path');

const app = express(); //inicializando
let server = http.createServer(app); //montado servidor con toda la configuracion que se pueda hacer al express


//creando public path para compartir y hacer publico la carpeta public, simple html
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000; //escuchando el puerto de heroku o el puerto 3000

//habilitar la carpeta publica
app.use(express.static(publicPath));

// IO = mantener conexion directa con el servidor, comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});