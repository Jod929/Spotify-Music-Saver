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

  },

  addTickers(username, ticker) {

  }
}