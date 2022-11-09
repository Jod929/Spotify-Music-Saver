const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb+srv://Joshkrebs1234:Packer01@cluster0.npemaq9.mongodb.net/?retryWrites=true&w=majority')
  .then((data) => {
    console.log('connected to mongoDB in db: ', data.connections[0].name);
  })
  .catch((err) => {
    console.log('err', err);
  })



const cryptoSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tickers:  { type: Array }

});

const Cryptos = mongoose.model('Cryptos', cryptoSchema);


module.exports = {
  connection,

  insertUser: function(username, password) {

    let userDoc = new Cryptos({
      username: username,
      password: password
    });

    return userDoc.save()

  },

  validateUser(username, password) {

    return new Promise((resolve, reject) => {
      Cryptos.find({ username: username, password: password }, (err, results) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(results)
        }
      })
    })

  },

  getUserTickers(username) {
    return new Promise((resolve, reject) => {
      Cryptos.find({username: username}, (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results);
        }
      })
    })
  },

  addTickers(username, ticker, tickerName) {

    ticker['name'] = tickerName;

    return new Promise((resolve, reject) => {
      Cryptos.findOneAndUpdate({username: username}, {$push : {tickers: ticker}}, (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results);
        }
      })
    })
  },

  deleteTicker(username, ticker) {

    // { $pull: { votes: { $gte: 6 } } }

    console.log('ticker', ticker);

    return new Promise((resolve, reject) => {
      Cryptos.update({username: username}, {$pull: { tickers: {name: ticker }}}, (err, results) => {
        if (err) {
          reject(new Error(err));
          // console.log(err);
        } else {
          // console.log('results: ', results);
          resolve(results);
        }
      })
    })
  },

  find(username, ticker) {

    return new Promise((resolve, reject) => {
      Cryptos.update({username: username}, {$pull: { tickers: {name: ticker }}}, (err, results) => {
        if (err) {
          reject(err);
          console.log(err);
        } else {
          console.log('results: ', results);
          resolve(results);
        }
      })

    })
  }
}