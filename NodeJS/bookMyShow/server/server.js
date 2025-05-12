const express = require("express");
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const connectToDB = require("./config/dbConfig");
connectToDB();
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showsRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const app = express();
app.use(express.json());

app.use(helmet({
    xPoweredBy: false,
}));
app.disable("x-powered-by");
app.use((req, res ,next) => {
    res.header("X-powered-by", 'No-entry');
    next();
})
//rate limitting middleware
const apiLimiter = rateLimit({
    windowMs: 15*60*1000, //15minutes
    max: 100, //lmit each IP to 100 requests per 15min
    message: "Too Many requestsfrom this IP, please try again after 15min",
    legacyHeaders: false
})
app.use("/api/", apiLimiter);
app.use(mongoSanitize());
app.use(cors({
    origin: ["http://localhost:3000", "https://bms-clone-t9vf.onrender.com"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials such as cookies, authorization headers

}))
const clientBuildPath = path.join(__dirname, "../client/build");
console.log(clientBuildPath);


app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showsRouter);
app.use("/api/bookings", bookingRouter);
app.use(express.static(clientBuildPath));
app.get("*", (req, res) => {
    console.log("Catch-all triggered for:", req.originalUrl);
    console.log("Headers:", req.headers);
    console.log("Host:", req.hostname);
    res.sendFile(path.join(clientBuildPath, "index.html"));
});
app.listen(8082, ()=>{
    console.log("Server is running");
})