// function name(p1,p2,p3){ //parameters 
//     //code to be executed
// }

// name(10,20,30); //arguments 


// function fn(){
//     console.log("Hi i am fn");
//     fn.count++;   
// }

// fn.count = 0;
// fn();
// fn();

// fn.showCount = function(){
//     console.log("count on fn is", this.count);
// };

// fn.showCount();


// const addFn = function(){
//     console.log("I am a variable that is why addFn stores my address");
// };
// addFn()

//arrow functions

// let fn = () => {

// }

// let fn = p1 => {
    
// }

// let fn = (p1,p2) => {
    
// }

// let fn = () => ["10","20"]

// let fn = () => {
//     //do something
//     return ["10","20"]

// }



//HOF -> higher order functions -> function accepts another function as an argument then that function is know as HOF . or if a function which returns another function is know as HOF 

function smallerfn() {
    console.log("I am smaller");
}
// foo -> HOF fn -> callback function
function foo(fn) {
    console.log("Inside HOF");
    fn();
}
foo(smallerfn);

// Ouput:
// Inside HOF
// I am smaller

function outer(){
    console.log("in outer");
    
    function inner(){
        console.log("i am inner");
        
    }
    return inner
}

// outer -> hof 