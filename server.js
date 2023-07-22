require('dotenv').config()
const router = require('./router')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router) 
 
app.listen(port, () => {
    console.log(`Running with port ${port}`);
})