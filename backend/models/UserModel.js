const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({

    name: String,
    email: String,
    phone: Number,
    enrollNum: String,
    date: String
})
const UserModel=mongoose.model('studenData',studentSchema)
module.exports=UserModel