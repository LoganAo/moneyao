//IMPORT'S SYSTEM
requiere('dotenv/config')//comes .env doc that have url link to database mLab
const mongoose = require('mongoose')

const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

//OUR IMPORTS 
const routes = require('./routes/routes')
//CONECT TO DATABASE
mongoose.connect(process.env.DB_URL, {useNewUrl:true}, () => {
    //DB_URL more secure to github, dont show the password, it is on .env
})

//APP CONFIGURATION

const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencode({extended: false}))

//APP ROUTES ROOT
app.use('/', routes)
app.use('/post',routes)


 app.listen(port)