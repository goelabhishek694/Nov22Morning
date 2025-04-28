const express = require("express");
require("dotenv").config();

const connectToDB = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showsRouter = require("./routes/showRoutes");
const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showsRouter);

app.listen(8082, ()=>{
    console.log("Server is running");
})
connectToDB();