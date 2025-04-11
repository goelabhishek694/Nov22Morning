const express = require("express");
require("dotenv").config();
const connectToDB = require("./config/dbConfig");
const app = express();

app.listen(8082, ()=>{
    console.log("Server is running");
})
connectToDB();