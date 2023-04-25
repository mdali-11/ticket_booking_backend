const express=require('express')
const {userModel}=require("../model/user.model")


const userRouter =express.Router();

userRouter.get("/", async (req, res) => {

    try {
        let users = await userModel.find();
        res.send(users);
        // console.log(notes);
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});

userRouter.post("/create",async(req,res)=>{
    const payload =req.body;
    try{
       const users =new userModel(payload)
       await users.save()
       res.send("Added new user")
    }catch(err){
     console.log(err)
     res.send({"msg":"soething went wrong"})
    }
})



module.exports={userRouter}