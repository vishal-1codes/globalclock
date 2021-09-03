const { json } = require("body-parser");
const express=require("express");
const router=express.Router();
const Clock=require("../models/clockModel");


router.get('/',(req,res,next)=>{
    Clock.find({},{_id:0,__v:0}).sort({_id:-1}).limit(1)
    .then(result=>{
        res.status(200).json({
            ClockData:result 
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})




router.route("/clock").post((req,res)=>{
    const comname=req.body.comname;
    const  comloc=req.body.comloc;
    const newClock=new Clock({
        comname,
        comloc
    });
    newClock.save();
})

module.exports=router;