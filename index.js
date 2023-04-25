const express=require("express")
const {connection}=require("./config/db")
const {userRouter} = require("./routes/user.router")
const cors=require("cors")
require("dotenv").config();


const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}))



app.get("/",(req,res)=>{
    res.send("Welcome to my database")
    console.log("hello")
})
app.use("/users", userRouter)


app.listen(process.env.PORT, async ()=>{
    try{
        await connection;
        console.log("connected successfully!")
    }catch(err){
        console.log(err);
        console.log("connection failed!")
    }

    console.log(`server listen on port ${process.env.PORT}`);
})

