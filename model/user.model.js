
const mongoose =require("mongoose");

const userSchema =mongoose.Schema({
     name:String,
     age:Number,
    sex:String,
    phone:String,
    address:String,
    govtID:String,
    guardian:String,
    nationality:String,
    userID:String
})

const userModel = mongoose.model('users',userSchema)

module.exports ={userModel}