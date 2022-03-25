const mongo=require("mongoose")
const hotelschema= mongo.Schema({
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

const hotelmodel=mongo.model("hotels",hotelschema)

module.exports=hotelmodel