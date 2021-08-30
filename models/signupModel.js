const mongoose=require("mongoose");

const signupSchema={
    email:String,
    password:String,
    comname:String,
    comloc:String
}

const Signup=mongoose.model("Signup",signupSchema)

module.exports=Signup;
