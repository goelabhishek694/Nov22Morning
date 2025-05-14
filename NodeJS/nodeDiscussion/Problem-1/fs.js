const path = require("path");
const fs = require("fs");
const { error } = require("console");
const filePath = path.join(__dirname, "big.file");
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream('copyOfBig.file');

readableStream.pipe(writableStream);

// readableStream.on("data", (chunk) =>{
//     console.log(`Received ${chunk.length} bytes of data.`);
//     writableStream.write(chunk);
// })

// readableStream.on("end", () =>{
//     writableStream.end();
//     console.log(`finsihed reading and writing file`);

// })

readableStream.on("error", (err) => {
    console.log("error while reading", err);
})

writableStream.on("error", (err) => {
    console.log("error while writing", err);
})

