const mongoose=require("mongoose");

const clockSchema={
    comname:String,
    comloc:String
}

const Clock=mongoose.model("Clock",clockSchema)

module.exports=Clock;
