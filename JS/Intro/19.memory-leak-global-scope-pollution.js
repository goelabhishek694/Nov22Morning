"use strict"
//problem of scope pollution
var b = 15;
function abc(){
    console.log(b);
    c = "Hi people";
    b++;
}

abc();

console.log("c is ", c);
b++;
console.log(b);


