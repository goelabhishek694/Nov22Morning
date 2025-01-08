let fs = require("fs");

const promise = promReadFile("./f11.txt");
promise.then((value) => {
    console.log(value+"");
});

promise.catch((err) => {
    console.log(err);
});

//promisify fs.readFile();

function promReadFile(filePath){
    return new Promise((resolve,reject) => {
        //perform a function . 
        // if err -> reject(err)
        //returned with a value
        // else resolve(value);
        fs.readFile(filePath, (err,data) => {
            if(err) reject(err);
            else resolve(data);
        })
    })
}

//callback based async code
// cb from these are put in cb queue
fs.readFile("f1.txt",(err,data) => {
    if(err) console.log(err);
    else console.log(data);
})

//promise based async code 
// cb from these re put in microtask queue 
let p = fs.promises.readFile("f2.txt")
p.then((data) => {
    console.log(data);
})
p.catch((err) => console.log(err));

