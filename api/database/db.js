//Imports system

requiere('dotenv/config')//comes .env doc that have url link to database mLab
const mongoose = require('mongoose')

//CONECT TO DATABASE
mongoose.connect(process.env.DB_URL, {useNewUrl:true}, () => {
    //DB_URL more secure to github, dont show the password, it is on .env
})
