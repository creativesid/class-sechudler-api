const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors');


//create express app
const app = express()

//setup the server
const port = process.env.PORT || 5000

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//parse request data content type application/json
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
    next()
})

//root route define  
app.get('/',(req,res)=>{
    res.send('Hello World')
})
//class route
const classRoutes = require('./src/routes/class.route')

//create class routes
app.use('/api/v1/class', classRoutes)

//listen to the server
app.listen(port,()=>{
    // console.log(`Express server is running on ${port}`)
})