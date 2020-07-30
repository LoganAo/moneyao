const express = require('express')

const routes = express.Router()

// THE ROUTES SHOULD BE HERE

routes.get('/', (res, req)=>{
    res.send(`working with this data ${res.body}`)
})

module.exports = routes