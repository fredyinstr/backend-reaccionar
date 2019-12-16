// Requires
var express = require ('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://138.121.170.119:27017/reaccionarDB', {useNewUrlParser: true}, (err, res) => {
// mongoose.connection.openUri('localhost/reaccionarDB', (err, res) => {
    if (err) throw err;
    console.log ('Base de datos: \x1b[32m%s\x1b[0m', 'online')
});



// Rutas

app.get('/', (req, res, next)=>{
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

// Escuchar peticiones

app.listen(3000, () => {
    console.log ('Servidor Express Reaccionar, puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});
