const mongoose=require("mongoose");

const signupSchema={
    email:String,
    password:String,
}

const Signup=mongoose.model("Signup",signupSchema)

module.exports=Signup;
