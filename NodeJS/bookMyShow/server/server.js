const express = require("express");
require("dotenv").config();

const connectToDB = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);

app.listen(8082, ()=>{
    console.log("Server is running");
})
connectToDB();