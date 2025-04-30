const express = require("express");
require("dotenv").config();

const connectToDB = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showsRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showsRouter);
app.use("/api/bookings", bookingRouter);

app.listen(8082, ()=>{
    console.log("Server is running");
})
connectToDB();