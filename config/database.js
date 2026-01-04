const mongoose = require("mongoose");
const model = require("../model/db.model")
const dotenv = require("dotenv").config()

const connectdb =()=>{ mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("db is connected");
})
.catch(err=>{
    console.log(err);
    
})}

module.exports = connectdb
