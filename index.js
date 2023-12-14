const fs = require('fs');
const express = require('express');

const multer = require('multer');
const upload = multer();

const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const file = __dirname + '/confirmation.txt';

app.post('/transaccion',upload.none(), (req, res) => {
  const bodyEnString = JSON.stringify(req.body)
  console.log(bodyEnString, req.params);
  fs.writeFile(file,bodyEnString, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  res.json({name:'jonji2'})
});

app.get('/obtener-archivo', (req, res) => {
  // Obtener los datos del archivo
  const datos = fs.readFileSync(file, 'utf8');

  // Agregar los datos del GET
  datos = datos + JSON.stringify(req.body);

  // Escribir los datos en el archivo
  fs.writeFile(file, datos, {flag: 'a'}, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  // Enviar los datos como respuesta
  res.sendFile(file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})