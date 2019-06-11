const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('server running')
})

app.listen(8080, () => {
  console.log('Running on port 8080')
})

