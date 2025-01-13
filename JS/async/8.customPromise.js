//promSetTimeout -> delay as argument 


function promSetTimeout(delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve("hello world") 
        }, delay);
    });
}

promSetTimeout(10000)
.then((data) => {
    console.log(data);
});

// .then(cb)

const executorFn = (resolve,reject) => {
    setTimeout(() => {
    //    resolve("hello world") ;
       reject("err") ;
    }, 1000);
}

const myPromise = new CustomPromise(executorFn);

myPromise.then((data) => {
    console.log(data);
})

myPromise.then((data) => {
    console.log(data);
})

myPromise.then((data) => {
    console.log(data);
})

myPromise.catch((err) => {
    console.log(err);
})

myPromise.finally(() => {
    console.log("hi i am finally");
})



function CustomPromise(executorFn){
    const PENDING = "pending";
    const RESOLVED = "resolved";
    const REJECTED = "rejected";

    let state = PENDING;
    let value = undefined;
    let scbArr = [];
    let fcbArr = [];
    let fncbArr = [];

    this.then = (cb) => {
        if(state == RESOLVED){
            cb(value)
        }else{
            scbArr.push(cb);
        }
    }

    this.catch = (cb) => {
        if(state == REJECTED){
            cb(value)
        }else{
            fcbArr.push(cb);
        }
    }

    this.finally = (cb) => {
        if(state == RESOLVED || state == REJECTED ){
            cb()
        }else {
            fncbArr.push(cb);
        }
    }

    const resolve = (val) => {
        state = RESOLVED;
        value = val;
        scbArr.forEach(cb => cb(value));
        fncbArr.forEach(cb =>cb());
    }

    const reject = (err) => {
        state = REJECTED;
        value = err;
        fcbArr.forEach(cb => cb(value));
        fncbArr.forEach(cb =>cb());
    }

    executorFn(resolve, reject);


}

