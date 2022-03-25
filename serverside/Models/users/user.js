const mongo=require("mongoose")
const userschema= mongo.Schema({
   name:{
       type:String,
       required:true,
   }, 
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    }
)

const usermodel=mongo.model("users",userschema)

module.exports=usermodel