// default paramater
function fn(param1, param2,param3="sayo nara"){
    console.log("hi params are", param1,param2,param3);
    
}

fn("hi","hello","bye");
fn("hi","hello");

// spread operator 
let arr = [1,2,3,4,5];
let arr2=arr; 
arr2.pop();
arr.push(100);
arr[2] =200;
console.log(arr);

// help you copy, but only at first level 

let arr2 = [arr] -> [[1,2,3,4,5]]
let arr2 = [...arr] -> [1,2,3,4,5] // new arr 


let arr2 = [...arr] 


let arr = [10,20,[30,40], 50];
let arr2 = [...arr] ;
arr2[1] = 500; 
arr2[2][0] = 5;
console.log(arr);
console.log(arr2);


let obj = {
    fname: "Nitish",
    age: 23,
    address : {
        state: "Delhi",
        country: "India"
    }
} //20k
obj["address"]["state"] = "Mumbai"
let newObj = {...obj} //30k
newObj["fname"] ="Anuroop"

console.log(obj);
console.log(newObj);

let newObj = {...obj}
// spread operator shallow copies and not deep copies. 


// rest parameter
// it is used to collect n number of params . syntax of rest and spread is same ... 
// they are used in different places. rest is used while accepting parameters in a function 

function fn(param1, ...param2){
    console.log(param1);
    console.log(param2);
}

// fn("hi","hello");
fn("hi","hello", "bye", "sayo nara", "ni hao");

function sumAll(...numbers){
    console.log(numbers.length);
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum = sum +numbers[i]
    }

    return sum;
    
}

console.log(sumAll(10,20));
console.log(sumAll(10,20,30,40));

