const express = require('express')
const bodyParser = require('body-parser')

//create express app
const app = express()

//setup the server
const port = process.env.PORT || 5000

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//parse request data content type application/json
app.use(bodyParser.json())

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