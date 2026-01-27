const { default: mongoose } = require("mongoose");

function dbConfig(){
    mongoose.connect("mongodb://localhost:27017/ecommerce").then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log("Error connecting to MongoDB:", err.message)
    })
}
module.exports = dbConfig; 