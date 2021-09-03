const { json } = require("body-parser");
const express=require("express");
const router=express.Router();
const Signup=require("../models/signupModel");


/*
router.get('/',(req,res,next)=>{
    Signup.find()
    .then(result=>{
        res.status(200).json({
            SignupData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

*/

router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Signup.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


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