//IMPORT'S SYSTEM
const app = require ('express')
const bodyParser = require('body-parser')

//OUR IMPORTS 
const router = require('./routes/routes')

//APP CONFIGURATION
app.use(bodyParser.json)
app.use(bodyParser.urlencode({extended: false}))
app.use(router)

/* I THINK WE MUST TO CCREATE A DIFEERENTS FILES, JUST 2, ONE FOR ALL 
GET REQUEST AND ONE FOR ALL POST */


/* HERE WE TAKE THIS DATA, JUST USER CREDENTIALS AND CHEK
 IF HE HAVE  MONEY TO MAKE TRANSITION TO OUR API*/
dataFromproxypay = app.get('proxypay.co.ao',(res, req) => {
   const data = req.url
})

const verif = vereifyAccount(data);


 /*HERE MAKE ANY VERIFICATION AND PUT A PRESISTENT IN A DATABASE*/


 /* AT THIS POINT WE MUST RETURN SOME THING , DEPEND IN A REQUEST */
 app.listen(PORT)