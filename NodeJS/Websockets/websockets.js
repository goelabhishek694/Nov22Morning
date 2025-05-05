const express = require("express");
const http = require("http");
const path = require("path");
const {Server} = require("socket.io");

const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("user is connected", socket.id);
    // setInterval(() => {

    //     socket.emit("message", "message from server - " + socket.id + " at " + new Date());
    // }, 2000)

    socket.on("disconnect", () => {
        console.log("user disconnected ", socket.id);
        
    })

    socket.on("message", (data) => {
        socket.broadcast.emit("broadcast", data);
    })
});

app.get("/", (req, res) => {
    // res.send("Hello World")
    const filePath = path.join(__dirname, "public", "index.html");
    res.sendFile(filePath);
});

server.listen(3000, () => console.log("server listening at 3000"));
