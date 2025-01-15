console.log("i am executed 1");

let name = "Praveen";
function greet(){
    console.log("Hello");
}
//naming conflicts
let age =25;
console.log(age);

//unintended modifications
let count =0;
function increment(){
    count++;
}
