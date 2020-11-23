/************* Dependencies *************/
const fetch = require('node-fetch')
const express = require('express')
const bodyParese = require("body-parser")
const cors = require("cors")
require('dotenv').config()

/************* Variables *************/

const port = 3000
const app = express() // define express app

/************* Middleware *************/
app.use(bodyParese.urlencoded({ extended: false }));
app.use(bodyParese.json())

app.use(cors())

app.use(express.static('dist'))

/************* Routes *************/
app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
})

app.post('/', (req, res) => {
  // encodeURI function used to remove spaces in txt
  const URL = encodeURI(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${req.body.value}&url=${req.body.URL}&lang=en`)
 
  // make a request to meaningCloud API
  fetch(URL, {
    method: "POST"
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      res.send({ data: data })
    })
    .catch((err) => {
      console.error(err.message)
    })
})

/************* *************/
app.listen(port, () => {
  console.log(`Server runing on localhost: ${port}`)
})
