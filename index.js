const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
    res.send("hii i am termineter")
} )

app.get('/login', (req , res) => {
    res.send("<h1>please login at bhushanbackend</h1>")
} )

app.get('/game', (req , res) => {
    res.send("You won play with me")
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('✨congrulation for start new apike jounary✨✅😎')
})