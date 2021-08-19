const mongoose =require('mongoose');
const express=require('express');
const clock=express();

const DB ="mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/factsbook?retryWrites=true&w=majority"

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