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
// const p1 = fs.promises.readFile("./f11.txt");

// p1.then((value) => {
//     console.log(value+"");
//     const p2 =fs.promises.readFile("./f2.txt");
//     return p2;
// })
// .then((data) => {
//     console.log(data+"");
//     return fs.promises.readFile("./f23.txt");
// })
// .then((data) => {
//     console.log(data+"");
// })
// .catch((err) => {
//     console.log(err.message);
// })


// let p1 = fs.promises.readFile("./f1.txt");

// p1.then(data=>console.log(data)); //buffer 
// p1.then(data=>console.log(data+"")); //contents 
// p1.then(data=>console.log("promise resolved")); 

// let p1 = new Promise((resolve,reject) => {
//     setTimeout(resolve(100),2000);
// });

// //async serial task 
// p1.then(value => {
//     console.log("line 71",value);
//     return value*2; //anything returned froma promise , is wrapped into promise and then returned 
// })
// .then((newData) =>{
//     console.log("line 75",newData);
//     return newData*2;
// })

// //async parallel task
// p1.then(data => {
//     console.log("line 80",data);
//     return data*2;
// });

// p1.then((data)=>{
//     console.log(data);
//     return data*2
// }, (err) => {
//     console.log("called from then hndler");
//     console.log(err);
// })
// .then(newData=>{
//     console.log(newData);
//     return Promise.reject("rejected from p2")
// })
// .then(val=>{
//     console.log(val);
//     return val*2;
// })
// .catch(err=>console.log("line 101",err))



//finally  -> it is used to atach cb that execute regardless of promise has been resolved rejected. 
//order of executon will be the order in which finally are dfined
// Example: Execution of finally
// let promise = fs.promises.readFile("f1.txt");

// promise.finally(function(err) {
//     console.log("err is 1", err);
// });

// promise.finally(function(err) {
//     console.log("err is 2", err);
// });

// promise.finally(function() {
//     console.log("I am not accepting");
//     console.log("Second line of finally");
// });


let p1 =  Promise.resolve(100);
// let p1 = Promise.reject("error in p1");

// p1.then(data => {
//     console.log(data); 
//     return data*2
// })
// .finally(val=>{
//     console.log(val, "inside finaly 0");
//     return val*2;
// })
// .then(newData=>console.log(newData))
// .catch(err=>console.log(err))
// .finally(val=>console.log(val, "inside finaly 1"))
// .finally(val=>console.log(val, "inside finaly 2"))

p1.catch(err=>console.log(err))
p1.then(d=>{
    console.log(d);
    // return d*2; //Promise.resolve(d*2)
    // return Promise.reject(d*2);
    throw new Error("error received");
})
.catch(err => {
    console.log("err1", err);
    throw new Error("error received inside catch");
})
.finally(() => {
    throw new Error("error received inside catch from finally");
})
.catch(err => {
    console.log("err2", err);
})