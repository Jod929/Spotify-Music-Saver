const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const api = require('../api/getData.js');
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

  let ticker = req.body.ticker.ticker;
  let user = req.body.user;

  let to = ticker.slice(0, 3);
  let from = ticker.slice(3, 6);

  api.getData(to, from)
    .then((data) => {
      return data;
    })
    .then((ticker) => {
      return db.addTickers(user, ticker);
    })
    .then((response) => {
      return getUserTickers(user);
    })
    .then((userTickers) => {
      res.send(userTickers);
    })
    .catch((err) => {
      console.log(err);
    })

  // ping the api with the ticker info
  // get that data and insert it into the db
  // get all the tickers for that user
  // send the tickers back to the client

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
