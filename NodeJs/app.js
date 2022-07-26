const express=require('express')
const slashrouter=require('./routes/slash')
const resturantRoutes=require('./routes/restaurent')
const locationRoutes=require('./routes/location')
const menuRoutes=require('./routes/menu')
const abcRouter=require('./routes/abc')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const mealTypeRoutes=require('./routes/mealType')
const cors=require('cors')

const PORT=9090;


const DBSTRING="mongodb://localhost/zomato_44"

mongoose.connect(DBSTRING,()=>{
    console.log("mongoDB connnected successfully")
},
e=>console.log("error occured while connecting to DB:",e))


let app=express();

//configuration
app.use(cors())
app.use(bodyParser.json())
app.use('',slashrouter)
app.use('/abc',abcRouter)
app.use('/menu',menuRoutes)
app.use('/restaurant',resturantRoutes) 
app.use('/location',locationRoutes)
app.use('/mealType',mealTypeRoutes)





app.listen(PORT,()=>{
    console.log(`The server is running on port: ${PORT}`)
})