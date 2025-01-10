let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(100),2000);
});
let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(200),1000);
    // setTimeout(()=>reject("err in p2"),1000);
});
let p3 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(300),3000);
});
// //i want to resolve all the promises, if any of the promise is rejected then my entire arrayOfPromises is rejected , and we are returned the error due to which my promise got rejected
// let arrayOfPromises = Promise.all([p1,p2,p3]);

// arrayOfPromises.then(data => console.log(data)).catch(err=>console.log("error", err))

Promise.myAll= function(promiseArray){
    let unresolvedPromises = promiseArray.length;
    const resolvedPromises = [];
    if(unresolvedPromises ==0){
        resolve([]);
        return;
    }
    return new Promise((resolve,reject) => {
        promiseArray.forEach((p,idx) => {
            try{
                p.then((data) => {
                    resolvedPromises[idx]=data;
                    unresolvedPromises--;
                    if(unresolvedPromises==0) resolve(resolvedPromises);
                })
                .catch(err=>{
                    reject(err);
                })
            }catch(err){
                console.log(err);
            }
        })
    })
}

let arrayOfPromises = Promise.myAll([p1,p2,p3]);
arrayOfPromises.then(data => console.log(data)).catch(err=>console.log("error", err));