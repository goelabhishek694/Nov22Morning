//synchronous 
//fs module

const { log } = require("console");
const fs =require("fs");

// console.log("Before");
// // const buffer = fs.readFileSync("./f1.txt");
// const data = fs.readFileSync("./f1.txt", "utf-8");
// console.log(data);
// console.log("After");

//asynchronous code 

// console.log("Before");
// fs.readFile("./f1.txt", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data+"");
// })
// console.log("After");

//sync with 2 files 
//when we have got two files to read and then and return the concatenated result , block the main thread . 
// console.log("Before");
// let d1=fs.readFileSync("./f1.txt","utf-8");
// let d2=fs.readFileSync("./f2.txt","utf-8");
// console.log(d1 + d2);

// console.log("After");


// const {Server} = require("http");
// console.log("Before");
// let content1 = fs.readFileSync("./f1.txt");
// let content2 = fs.readFileSync("./f2.txt");
// console.log("" + content1 + "\n" + content2);
// console.log("After");

// Server.get("/",cb);
// Server.post("/",cb);

// async code with sequential task
// let c1,c2;
// console.log("Before");
// fs.readFile("./f1.txt", (err,data) => {
//     c1=data;
//     fs.readFile("./f2.txt", (err,data) => {
//         c2=data;
//         console.log(c1 +" "+ c2);
//     });
// });


// console.log("After");


// async code with parallel task

console.log("Before");
fs.readFile("./f1.txt",(err,data)=>{
    console.log(data+"");
})

fs.readFile("./f2.txt",(err,data)=>{
    console.log(data+"");
})
console.log("After");
