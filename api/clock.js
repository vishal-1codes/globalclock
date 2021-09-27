const mongoose =require('mongoose');
const express=require('express');
const clock=express();

const DB ="mongodb connection string"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful ");
}).catch((err)=>{
    console.log("no connection");
})