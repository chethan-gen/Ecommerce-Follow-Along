const express = require("express");

const userRouter = express.Router();

const uploadUserImage = require("../middleware/multer")

const {userModle} = require("../models/usermodel")

userRouter.post("/signup",uploadUserImage.single("image"),async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(name !="" || email !="" || password !=""){
            return res.status(400).json({message:"Please fill all the fields"});
        }
        const user = await userModle.findOne({email:email});
        if(user){
            return res.status(200).json({message:"Email already exists"});
        }
   
        const newUser = await userModle.insertOne({name,emial,password});

        return res.status(200).send({message:"User registered sucessfully"})
        

    } catch (error) {
       return res.status(500).send({message:"Something went wrong"})
    }
})

userModle.post("/login",async(req,res)=>{
    try {
        const{email,password} = req.body;
        if(email !=""||password !=""){
            return res.status(400).json({message:"Please fill all the fields"});
        }
        return res.status(200).send({message:"User loged in sucessfully"})
    }catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})



module.exports = userRouter;