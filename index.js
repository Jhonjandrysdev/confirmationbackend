const express = require('express')

const multer = require('multer');
const upload = multer();


const app = express()
const port = process.env.PORT || 3000;


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/transaccion',upload.none(), (req, res) => {
  console.log(req.body, req.params);
  res.json({name:'jonji2'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})