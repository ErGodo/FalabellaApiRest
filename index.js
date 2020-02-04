const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var conf = require('./config').config();
const fs=require('fs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var cors = require('cors');
app.use(cors());

const rutas = require

const PORT = process.env.PORT || 3000;

app.post('/api/renta', (req, res) =>{
    let rut = req.body.rut; 
    let celular = req.body.celular; 
    let email = req.body.email;
    let renta = req.body.renta; 
    
    let string = rut + ";" + celular + ";" + email + ";" + renta;

    fs.writeFile('./files/archivo1.txt', string , error => {
        if (error){
            console.log(error);
            var str = '{ "resultado": "NO OK" }';
            var obj = JSON.parse(str);
          res.status(500).send(str);
        }
        else{
            console.log('El archivo fue creado');
            var str = '{ "resultado": "OK" }';
            var obj = JSON.parse(str);
            res.status(200).send(str);
        }
        
      });
})

app.listen(process.env.PORT || 3000, '0.0.0.0', () =>{
    console.log(`Api Rest corriendo en http://localhost:${PORT}`)
})