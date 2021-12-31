const path=require('path')
const express=require('express')
const ejs=require('ejs')
const bodyParser=require('body-parser')
const app=express()
const PORT=3000
const connection=require('./config/database')
const indexRouter=require('./routes/router')

//set views
app.set('views',path.join(__dirname,'views'))

//set view engine
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//set public folder
app.use(express.static(path.join(__dirname,'public')))

//use router
app.use("/user",indexRouter)


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})