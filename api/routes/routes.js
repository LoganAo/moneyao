//Import system 
const express = require('express')
const routes = express.Router()

//Routes

routes.post('/post/transfer', (res, req)=>{
    //Make an transfer 
})

routes.get('/', (res, req) => { 
    //Returns an array contains all user's data
})
routes.get('/user/:id', (res, req) => {
    //Returns an object with a specific user credentials, without no password
})

routes.get('/user/:id/credit', (res, req) => {
    //Returns the value in account and user's bank 
})


module.exports = routes