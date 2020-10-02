//IMPORT'S SYSTEM
// const cors = require('cors')
const express = require ('express')
const app = express()


//OUR IMPORTS 

const routes = require('./routes/routes')
const PORT = 3000

//APP CONFIGURATION
// app.use(cors())

app.use(app.json())
app.use(app.urlencode({extended: false}))

//APP ROUTES ROOT
app.use('/status', status)
app.use('/transfer',transfer)


 app.listen(PORT)