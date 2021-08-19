const express=require("express");
const router=express.Router();
const Signup=require("../models/signupModel");



router.route("/create").post((req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const newSignup=new Signup({
        email,
        password
    });
    newSignup.save();

})

module.exports=router;