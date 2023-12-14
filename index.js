const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());



app.get('/jonji', (req, res) => {
  res.json({name:'jonji'})
  console.log(req.body.name, req.params);
})
app.post('/jonji-', (req, res) => {
  res.json({name:'jonji'})
  console.log(req.body, req.params);
})
app.post('/transaccion', (req, res) => {
  console.log(req.body, req.params);
  res.json({name:'jonji2'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})