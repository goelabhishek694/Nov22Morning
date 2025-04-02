// fs -> file system 
const { dir } = require("console");
const fs = require("fs");

// //reading files
// fs.readFile("./sample.txt", 'utf-8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// //writing files
// const content = "Hello, World!"
// fs.writeFile("sample2.txt", content, 'utf-8', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File has been written")
// })

// //fs.mkdir -> make directory
// const directoryName = 'my-directory';
// fs.mkdir(directoryName, (err) => {
//     if (err) {
//         console.error(`Error creating directory: ${err}`);
//       } else {
//         console.log(`Directory "${directoryName}" created successfully.`);
//       }
// })

// fs.rmdir(directoryName, {recursive: true}, (err) => {
//     if (err) {
//         console.error(`Error deleting directory: ${err}`);
//       } else {
//         console.log(`Directory "${directoryName}" deleted successfully.`);
//       }
// })
// //fs.rmdir -> remove directory
// //fs.readdir -> read directory

// //fs.rename -> rename files
// fs.rename('sample.txt', 'sample1.txt', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File has been renamed")
// }) 

// //fs.unlink -> delete files
// fs.unlink('sample1.txt', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File has been deleted")
// }) 

//fs.stat -> give info about directories
// fs.stat('sample2.txt', (err, stats) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(stats);
//     console.log("File size : ", stats.size);
//     console.log("is directory ? ", stats.isDirectory());
    
// })

//allows us to watch for changes to files and directories , usefule for real time monitoring if files system changes
//fs.watchFile
//fs.watch  
const directoryPath = '../../React/Intro/abc';
if(fs.existsSync(directoryPath)){
    console.log(`The directory "${directoryPath}" exists.`);
}else{
  console.log(`The directory "${directoryPath}" does not exist.`);

}