const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const cors = require('cors');
var morgan = require('morgan');


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//app.use(express.static('../frontend/dist/frontend'));
// middlewares (Entendimiento de datos)
//Acciones necesarias antes de ir a rutes
app.use(express.json()); //Archivos .json
app.use(express.urlencoded({extended: false})); //Entiende datos de HTML
app.use(cors());

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//rutas
// uso de lo exportado desde el archivo routers
app.use(require('./routes/index'));

app.listen(4000);
console.log('Servidor corriendo en el puerto 4000');