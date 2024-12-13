// Ques1
// let firstVar = "created using let"; //script scope
// var secondVar = "created using var"; // global scope 

// console.log("hello from ", this); // this -> window 

// Ques2
// let cap = {
//     // property
//     firstName : "Steve",
//     // method
//     sayHi : function(){
//         console.log("hi from", this.firstName);
//     }
// }
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

// Ques3
// let cap = {
//     // property
//     firstName : "Steve",
//     // method
//     sayHi : function(){
//         console.log("hi from", this.firstName);
//     }
// }
// cap.sayHi();
// var firstName = "Loki"
// let sayHiAdd = cap.sayHi;
// sayHiAdd(); 

// Ques4
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log(this.firstName);
//         const iAmInner = function(){
//             // console.log(this.firstName);
//             // console.log(this);
            
//         }
//         iAmInner(); 
//     }
// }
// cap.sayHi();

// Ques 5 
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// sayHi , this -> cap object 
//arrow functions do not have their own this . their this point's to their parent'this 
// this of iAmInner -> this of sayHi
// this of iAmInner -> cap object


// Ques6
// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : () => {
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();


// Ques7 
// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const subInner = () => {
//             console.log("54", this.firstName);
//             const iAmInner = ()=> {
//                 console.log("55", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi();


"use strict";
let cap = {
    // property
    firstName: "Steve",
    // method
    sayHi : function(){
        console.log("hi from", this.firstName);
    }
}
cap.sayHi(); //steve
var firstName = "Loki"
let sayHiAdd = cap.sayHi;
sayHiAdd(); //this -> undefined
