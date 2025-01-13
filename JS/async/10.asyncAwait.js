//promises -> syntax -> async/await

//async keyword 
// async function foo(){
//     return 100; //bts -> return Promise.resolve(1);
// }

// foo() //-> returns a promise 
// .then(val=>console.log(val));


//await 
// let value = await promise; 
// await keyword make JS wait until the promise settles and returns it's result . 

// async function f(){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>resolve(100),10000);
//     });

//     let result = await promise; //the function execution pauses at this line . and only resumes when the promise is settled . 
//     console.log(result);
// }

// f();
// console.log("hello called f");

//async task with serial execution 

const fs =require("fs");
// async function readAllFiles(){
    
//     //first f1data is going to be read, then f2 then f3 and then f4 . 
//     let f1Data = await fs.promises.readFile("./f1.txt");
//     let f2Data = await fs.promises.readFile("./f2.txt");
//     let f3Data = await fs.promises.readFile("./f3.txt");
//     let f4Data = await fs.promises.readFile("./f4.txt");

//     console.log(f1Data+"");
//     console.log(f2Data+"");
//     console.log(f3Data+"");
//     console.log(f4Data+"");
    
// }

// readAllFiles()

// async task with parallel execution

async function readFileF1(){
    try{
    let f1Data = await fs.promises.readFile("./f1.txt");
    console.log(f1Data+"");
    }catch(err){
        console.log(err);
    }
}
async function readFileF2(){
    let f2Data = await fs.promises.readFile("./f2.txt");
    console.log(f2Data+"");
}
async function readFileF3(){
    let f3Data = await fs.promises.readFile("./f3.txt");
    console.log(f3Data+"");
}
async function readFileF4(){
    let f4Data = await fs.promises.readFile("./f4.txt");
    console.log(f4Data+"");
}
readFileF1()
readFileF2()
readFileF3()
readFileF4()