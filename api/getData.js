const getData = function(to, from) {
  to = to.toUpperCase();
  from = from.toUpperCase();

  let url = `https://api.exchange.cryptomkt.com/api/3/public/ticker/${to}${from}`

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(data => data.json())
      .then((res) => {
        resolve(res);
      })
  })

}

module.exports = {
  getData
}

// getData('eth', 'btc');