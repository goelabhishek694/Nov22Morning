//array of promises, all the promies would race against each other . first one to settle wins .
//first one to either resolve or reject
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('two'), 1500);
});

// Promise.race([firstPromise, secondPromise])
//     .then((result) => {
//         console.log("First settled promise:", result);
//     })
//     .catch((err) => {
//         console.log("First settled promise:", err);
//     });

//the first promise that fulfills wins (resolves)
Promise.any([firstPromise, secondPromise])
    .then((result) => {
        console.log("First settled promise:", result);
    })
    .catch((err) => {
        console.log("First settled promise:", err);
    });

//hw -> promise.allSetled 