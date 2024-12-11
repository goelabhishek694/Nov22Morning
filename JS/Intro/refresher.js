// var myVar;
// console.log(myVar);

// console.log(5/2);

// let age =25;
// let str1 = 'I am ' + age + ' years old';
// let str2 = "I am " + age + 
// " years old";
// console.log(str2);

// let templateString = `I am
// ${age} years old`;
// console.log(templateString);

// var isEven = true; 


// var a = 10;
// console.log(typeof a);
// a="hello"
// console.log(typeof a);
// a = {name:"Scaler"}
// console.log(typeof a);
// a=true;
// console.log(typeof a);
// a=undefined
// console.log(typeof a);
// a = null;
// console.log(typeof a);
// console.log(typeof [1,2,3]);
// let arr = [1,2,3,4];

// console.log(Array.isArray(arr));

// a=10;
// var a= new Number(10);
// console.log(typeof a);
// console.log(typeof typeof a);

// console.log(typeof Number);
// a=10;

// str = "Hello";
// var str = new String("bye");
// console.log(str.toUpperCase());



//non primitives

//function definition
// function fn(param1){
//     console.log("Hello World", param1);
//     return `
//     returned value`
// }

// let rVal = fn() ; 
// console.log("return value ", rVal);


// Object and JSON

// collection of key value pairs .

// let cap = {
//     name : "Steve",
//     'last name' : "Rogers",
//     age:"23",
//     isAvenger: true,
//     // address: {
//     //     city: "Manhattan",
//     //     state: "New York"
//     // },
//     // sayHi: function(){
//     //     console.log("Cap says Hi");
//     // },
//     // movies : ["Avengers", "Civil War"]
// };

// // 2 ways 
// // 1. dot operator 
// console.log("my name is ",cap.name);
// // 2. using [] bracket
// // console.log("my last name is ", cap["last name"]);
// let random = 'last name'
// console.log("my last name is ", cap[random]);

// for(let key in cap){
//     // console.log(typeof key);
//     console.log(key, cap[key], cap.key);
    
    
// }


// var a=10;
// function foo(){
//     console.log("I am Fn");
    
//     function inner(){
//         console.log("I am innner Fn");
//     }

//     inner();
// }

// foo();


// function real() {
//     console.log("I am real. Always run me");
// }
// function real() {
//     console.log("No I am real one ");
// }
// real();
// function real() {
//     console.log("You both are wasted");
// }

// console.log(a);
// var a = 10;
// console.log(a);

// console.log(this);
// console.log(this.a);
// console.log(a);


// let,var,const

// var => reassigned 
// var a=20; 
// a=100;
// a="hello";
//redeclared
// var a = 23;
// var a = 203;
// scope -> function 


// var a = 10;
// console.log( a);

// function fn() {
//     var a = 20;
//     console.log( a);
//     a++;
//     console.log( a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log( a);
//     }
//     console.log( a);
// }
// fn();
// console.log( a);


// let 
// reassign 
// let a=10;
// a=100;

// cannot redeclare
// let a=10;
// let a=100;

// Scope  
// block scoped 
// {} -> block  -> variable can only be accesible inside this block ,not outside of it . 
// function, for , if 

// let a = 10;
// console.log( a); //10

// function fn() {
//     let a = 20;
//     console.log( a); //20
//     a++;
//     console.log( a); //21
//     if (a) {
//         let a = 30;
//         a++;
//         console.log( a); //31
//     }
//     console.log( a); //21
// }
// fn();
// console.log( a); //10

//variable should be initialized before accessing it 
// console.log(a);  //error -> cannot access a before iniitalization
//in case of let , our varibale is allocated a memory, but it is not initialized with a value (undefined)
let a;
console.log(a); //ud
a=30;
console.log(a); //30


// console.log(b);//ud
// var b;
// console.log(b); //ud
// b=30;
// console.log(b); //30 

// const c; intialize varibale declared using const 
const c =100;




