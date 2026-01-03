const mongoose = require("mongoose");
const model = require("../model/db.model")
const connectdb =()=>{ mongoose.connect("mongodb://127.0.0.1:27017/myapp")
.then(()=>{
    console.log("db is connected");
})
.catch(err=>{
    console.log(err);
    
})}

module.exports = connectdb