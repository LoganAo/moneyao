const express = require('express')
const status = express.Router()


status.get('/', (res, req) => { 
     //Returns an array contains all user's data
 })
 status.get('/user/:id', (res, req) => {
     //Returns an object with a specific user credentials, without no password
 })
 
 status.get('/user/:id/credit', (res, req) => {
     //Returns the value in account and user's bank 
 })
 
 module.exports = status