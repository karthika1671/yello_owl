const express=require('express')
const bodyParser=require('body-parser')
const UserModel=require('../models/UserModel')
const router=express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send("User page")
})

router.post('/post',(req,res)=>{
    console.log("req.body")
    const newUser=new UserModel(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("users post page")
})

router.get('/get',(req,res)=>{
    UserModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.get('/get/:id',(req,res)=>{
    UserModel.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body)
    UserModel.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("User update page")
})
router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    UserModel.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("User Delete page")
})


module.exports=router