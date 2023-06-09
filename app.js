const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,"/public")));

app.get('/', (req,res) =>{
    res.sendFile((__dirname+ '/views/index.html'));
})


app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname+ '/views/ingresar.html'));
})

app.get('/register', (req,res) =>{
    res.sendFile((__dirname+ '/views/registro.html'));
})

app.get('*', (req,res) =>{
    res.send("ruta restringida, hermos localizado la direccion")
})

app.listen (3002, function () {
    console.log("Servido corriendo");
})