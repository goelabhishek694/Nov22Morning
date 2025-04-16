const express = require("express");
require("dotenv").config();

const connectToDB = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const app = express();
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(8081, ()=>{
    console.log("Server is running");
})
connectToDB();