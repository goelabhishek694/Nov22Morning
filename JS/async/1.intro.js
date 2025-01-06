//synchronous code

// console.log("before"); //before
// function fn() {
//   console.log("i am fn");
// }
// fn(); //-> a new execution context is created , and is pusehd onto stack . stackis not empty . it first eecutes this function , and then this EC is removed from the stack and then only we can execurte the next line , that is GEC line
// console.log("after");


//asynchronous js  -> piece of code that is executed at the current point of time and other piece of code is executed on later part

// console.log("Before"); //before 
// function fn(){
//     console.log("i am fn");
// }
// setTimeout(fn, 3000);  
// console.log("After");


// Ques 1 
// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
// console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// while(a){
    
// }

// // ques2 

// console.log("Before");

// const cb2 = () => {
//         console.log("Set timeout 1");
//         // while(1){

//         // }
// }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000)

// setTimeout(cb1, 2000)

// console.log("After");


//Ques3

console.log("Before");

const cb2 = () => {
        console.log("Set timeout 1");
        let timeInFuture = Date.now() + 5000;
        while(Date.now() < timeInFuture){

        }
}

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");
