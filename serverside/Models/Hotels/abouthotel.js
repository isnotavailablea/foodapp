const mongo=require("mongoose")
const abouthotelschema= mongo.Schema({
   forId:{
       type:String,
       required:true
   },
   dishes:{//Contains categories as keys and dishes as arrays
       type:Object
 },
   currentOrders:{
       type:Array
   },
   previousOrders:{
       type:Array
   }
    }
)

const abouthotelmodel=mongo.model("abouthotels",abouthotelschema)

module.exports=abouthotelmodel