const mongo = require("mongoose");
const aboutuserschema=mongo.Schema({
    forId:{
        type:String,
        required:true
    },
    orderHistory:{
        type:Array,
        required:true
    },
    currentOrder:{
       type:Object,
       required:true
    },
    //loveThisDish-->An array that will hold your favourate dishes from variety of restraunts
    //loveThisRestraunt-->An array that holds all the restraunts you love
    //Image-->Contains your images
})
const aboutusermodel=mongo.model("aboutUsers",aboutuserschema)
module.exports=aboutusermodel