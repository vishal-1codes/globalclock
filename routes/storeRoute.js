const express=require("express");
const router=express.Router();
const Signup=require("../models/signupModel");



router.route("/create").post((req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const comname=req.body.comname;
    const  comloc=req.body.comloc;
    const newSignup=new Signup({
        email,
        password,
        comname,
        comloc
    });
    newSignup.save();

})

module.exports=router;