// var a = 10;
// let b=10;
// {
//     // console.log(a);
//     //the time in duration for which the variable is uninitialized and becomes initialized is know as temporal dead zone . 
//     let a =100;
//     console.log(a);
    

//     // var a=90;
//     // console.log(a);
//     // a=100;
//     // console.log(a);
    
    
// }
// console.log(a);


// let message = "Hello, world!"; 

// function greet() {
//     let message = "Hello, from the function!"; 
//     console.log(message);
// }

// greet();
// console.log(message);

// let number = 42; 
// if (true) {
//     let number = 99;     
//     console.log(number); 
// }

// console.log(number);


// let greeting = "Hi there!";

// function displayMessage(greeting) {
//     console.log(greeting);  //paramter shadowing 
// }

// displayMessage("Hello!"); 
// console.log(greeting); 

//illegal shadowing 

// Illegal shadowing in JavaScript occurs when a variable declared in a block scope with let or const conflicts with a variable declared with var in the same or outer scope.

let a = 10;
{
    a = 100;
    console.log(a);
}
console.log(a);