const mongoose = require("mongoose");

async function connect(){
    try {
       await mongoose.connect("mongodb+srv://chethanregala08:1aA%401aA%40@cluster0.frhdm.mongodb.net/")
    } catch (error) {
        console.log("Mongo db error",error);
        
    }
}

module.exports=connect;