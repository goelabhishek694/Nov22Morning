const fs = require("fs");
// const content = Math.random().toString(36).repeat(10000000);
// fs.writeFileSync("./big.file", content);


const http = require("http");
const server = http.createServer();

server.listen(3000, () => {
    console.log("Server started at 3000");  
});

server.on("request", (req, res) => {
    // fs.readFile("./big.file", (err, data) =>{
    //     if(err) throw err;
    //     res.end(data);
    // })
    //creating a readable stream
    const src = fs.createReadStream("./big.file");

    //creating a writable stream 
    //res is the destination where we want our readable stream data to go . since res is by default stream enabled, we do not have to explicitly create a writable stream

    src.pipe(res);
})