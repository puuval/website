const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

/*
BACKEND FOR THE APPLICATION
*/

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

/*
Simple use of port listening for requests
*/

const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
  })
