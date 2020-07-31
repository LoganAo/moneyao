//IMPORT'S SYSTEM

const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

//OUR IMPORTS 
const routes = require('./routes/routes')

//APP CONFIGURATION

const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencode({extended: false}))

//APP ROUTES ROOT
app.use('/', routes)
app.use('/post',routes)


 app.listen(port)