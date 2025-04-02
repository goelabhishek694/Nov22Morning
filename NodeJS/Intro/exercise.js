//copy a file fom one folder to aother in nodejs

const fs = require('fs');
const path = require('path');

//define the source and destination file paths 
const sourceFilePath = path.join('sample.txt')
const destinationFilePath = path.join('sample2.txt');

console.log(sourceFilePath);
console.log(destinationFilePath);


// ans -> readfile from source 
// write the data in destintion 

//create a readbale stream from source file 
const readStream = fs.createReadStream(sourceFilePath);
console.log(readStream);

//create a writable stream to the destination file 
const writeStream = fs.createWriteStream(destinationFilePath);
console.log(writeStream);

readStream.pipe(writeStream);

//handle any errors that may occur during the copy process
readStream.on("error", (err) => {
    console.error("error reading the source file", err);
})

writeStream.on("error", (err) => {
    console.error("error writing the source file", err);
})

//when the copy is completed , log a success message
writeStream.on("finish", () => {
    console.log("file copied successfully");
    
})
