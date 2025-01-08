const fs = require("fs");

// console.log("Before");
// const readFilePromise = fs.promises.readFile("./f11.txt");
// console.log(readFilePromise);
// console.log("After");
// setTimeout(()=>{
//     console.log("printing value of promise after file is read");
//     console.log(readFilePromise);
// },2000)

// then and catch 

// readFilePromise.then((value) => {
//     console.log("promise is resolved with value", value+"");
// })

// readFilePromise.catch((err) => {
//     console.log("promise is rejected with error", err+"");
// })



//print data of f1,f2,f3

// const promiseReadFiles = fs.promises.readFile("./f1.txt");
// promiseReadFiles.then((value) => {
//     console.log(value);
//     let p2 =fs.promises.readFile("./f2.txt");
//     p2.then((data) => {
//         console.log(data);
//         let p3 = fs.promises.readFile("./f3.txt");
//         p3.then((data) => {
//             console.log(data);    
//         })
//     })
// })

// chaining of promises 
//also an example for serial tasks 
const p1 = fs.promises.readFile("./f11.txt");

p1.then((value) => {
    console.log(value+"");
    const p2 =fs.promises.readFile("./f2.txt");
    return p2;
})
.then((data) => {
    console.log(data+"");
    return fs.promises.readFile("./f23.txt");
})
.then((data) => {
    console.log(data+"");
})
.catch((err) => {
    console.log(err.message);
})