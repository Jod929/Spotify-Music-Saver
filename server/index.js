const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.resolve('./client/src/dist')))

app.use(bodyParser.json());

app.post('/signup', (req, res) => {

  db.insertUser('steve', '1234')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("err", err);
  })

})

// coms stuff

app.post('/login', (req, res) => {

})

app.put('/addTicker', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// test comit