const mongoose=require("mongoose");

var mongoDBURL='mongodb+srv://chetan:chetan@cluster0.t9f2n.mongodb.net/mern-ecommarce'

mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})

var dbconnect=mongoose.connection

dbconnect.on('error',()=>{
    console.log(`MongoDB connection is Failed`);

})

dbconnect.on('connected',()=>{
    console.log(`MongoDB connection is Successfully`);

})

module.exports=mongoose