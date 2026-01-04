const express = require("express")
const app = express()
const router = require("./routes/router")
const path = require('path');
const connectdb = require("./config/database")
const dotenv = require("dotenv")
connectdb()

app.set("view engine",'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
    
})
