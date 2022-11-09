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
      let user = data[0].username;
      return db.getUserTickers(user);
    })
    .then((userInfo) => {
      res.send(userInfo)
    })
    .catch((err) => {
      console.log(err);
    })

})

app.put('/addTicker', (req, res) => {

  let tickerName = req.body.ticker.ticker;
  let user = req.body.user;

  let to = tickerName.slice(0, 3);
  let from = tickerName.slice(3, 6);

  api.getData(to, from)
    .then((data) => {
      return data;
    })
    .then((ticker) => {
      return db.addTickers(user, ticker, tickerName)
    })
    .then((data) => {
      return db.getUserTickers(user)
    })
    .then((data) => {
      res.send(data);
      // console.log('data from get tickers', data);
    })
    .catch((err) => {
      console.log(err);
    })

})

app.put('/deleteTicker', (req, res) => {
  console.log('reqBODY', req.body)
  let user = req.body.user;
  let ticker = req.body.ticker;

  db.deleteTicker(user, ticker)
    .then((response) => {
      // console.log('resepons test', response)
     return db.getUserTickers(user)
    })
    .then((tickers) => {
      res.send(tickers);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
