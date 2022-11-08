const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// console.log(path.resolve('./client/src/dist'));

app.use(express.static(path.resolve('./client/src/dist')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// test comit