const express=require('express')
const student=require("./routes/Student")
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1/student')
mongoose.connection.on('connected',()=>{
    console.log("Mongodb is connected succesfully")
})
app.get('/',(req,res)=>{
    res.send("Home page")
})
 app.use('/student',student)
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})