const express = require('express')
const app = express()


// Connect to Postgresql Database
const { Client } = require('pg')
const client = new Client()

await client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})



app.get('/', (req, res) => {
  res.send('server running')
})

app.listen(8080, () => {
  console.log('Running on port 8080')
})

