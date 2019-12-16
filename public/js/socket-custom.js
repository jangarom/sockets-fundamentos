var socket = io();

//escuchar procesos con ON
//definir primera función, de cuando se conecta al servidor
socket.on('connect', function() {
    console.log(`Conectado al servidor`);
}); //aplicacion estará pendiente del backend

//detectar cuando perdemos conexión con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar información, un objeto
socket.emit('enviarMensaje', {
    usuario: 'Juanan',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})