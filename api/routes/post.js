const bcrypt = require('bcrypt')
const express = require('express')
const transfer = express.Router()



//Only routes for transfer money 

transfer.post('/post/transfer', (res, req) => {
     //Make an transfer 
     //generate a secure encriptation using bcrypt
 })
 

 module.exports = transfer