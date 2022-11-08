const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.resolve('./client/src/dist')))

app.use(bodyParser.json());


app.post('/signup', (req, res) => {

  let username = req.body.userInfo.signUpUsername;
  let password = req.body.userInfo.signUpPassword;

  db.insertUser(username, password)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log("err", err);
  })

})


app.post('/login', (req, res) => {

  let userName = req.body.userInfo.loginUsername;
  let password = req.body.userInfo.loginPassword;

  db.validateUser(userName, password)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
  })

})

app.put('/addTicker', (req, res) => {
  console.log(req.body)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
