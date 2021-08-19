const express=require("express");
const app=express();
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
const mongoose=require("mongoose")


app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect("mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/globalclock?retryWrites=true&w=majority")

app.use("/",require("./routes/storeRoute"))


app.get("/",function(req,res){
    res.send("Express here")
})

app.listen(5000,function(){
    console.log("express server is running on port 5000");
})