const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const connect = require('./db/mongoDB');
const morgan = require('morgan');
const USER_ROLE = require('./model/userRoleModel')
const userRouter = require('./router/userRouter')
const cors = require('cors')


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//API'S
app.use('/',userRouter)



app.get('/', function (req, res) {
    res.send('Hello World')
  })


//db connection
connect()
.then(()=>{
    try{
      
app.listen(port, ()=>{
    console.log(`Server connected to http://localhost:${port}`);

})
    }catch(error){
        console.log('cannot connect to the server');
    }
})
.catch((error)=>{
    console.log('invalid database connection...!',error);
})