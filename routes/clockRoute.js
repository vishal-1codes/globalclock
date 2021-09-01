const { json } = require("body-parser");
const express=require("express");
const router=express.Router();
const Clock=require("../models/clockModel");

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