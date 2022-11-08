const getData = function(to, from) {
  to = to.toUpperCase();
  from = from.toUpperCase();

  let url = `https://api.exchange.cryptomkt.com/api/3/public/ticker/${to}${from}`

  fetch(url)
    .then(data => data.json())
    .then((res) => {
      console.log(res);
    })
}

module.exports = {
  getData
}

// getData('eth', 'btc');