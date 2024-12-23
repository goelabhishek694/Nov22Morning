//Currying
//curryingninvolves splitting up a function that accepts multiple arguments into several function that only accept one parameter
// foo(10,20,30) -> foo(10)(20)(30)

// function getFirstName(firstName){
//     console.log("i have got your first name");
//     return function getLastName(lastName){
//         console.log("i have got your last name");
//         return function greeter(){
//             console.log(`Hi i am ${firstName} ${lastName}`); //nested closure
//         }
//     }
// }

// getFirstName("Anbazhagan")("B")();

// let a =100;
// console.log("Before");
// function cb(){
//     console.log(" I will explode", a);
// }
// setTimeout(cb, 2000);
// console.log("After");

// // Before
// // After
// //100

// function outer(){
//     let arrFn =[ ];
//     for(var i=0;i<3;i++){
//         function fn(){
//             console.log(i);
//         };
//         arrFn.push(fn);
//     }
//     return arrFn
// }
// let arrFn = outer();
// arrFn[0](); //3
// arrFn[1](); //3
// arrFn[2](); //3

// function outer(){
//     let arrFn =[ ];
//var is function scoped, this means that all the functions created inside the loop share the same ref to i .
//     for(var i=0;i<3;i++){
//         function fn(){
//             i++;
//             console.log(i);
//         };
//         arrFn.push(fn);
//     }
//     return arrFn
// }
// let arrFn = outer();
// arrFn[0](); //4
// arrFn[1](); //5
// arrFn[2](); //6

// function outer(){
//     let arrFn =[ ];
//     let i = 0;
//     for(i;i<3;i++){
//         function fn(){
//             console.log(i);
//         };
//         arrFn.push(fn);
//     }
//     return arrFn
// }
// let arrFn = outer();
// arrFn[0](); // 3
// arrFn[1](); // 3
// arrFn[2](); // 3

// function outer() {
//   let arrFn = [];
//   for (let i = 0; i < 3; i++) {
//     function fn() {
//       console.log(i);
//     }
//     arrFn.push(fn);
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); // 0
// arrFn[1](); // 1
// arrFn[2](); // 2

// function outer() {
//   let arrFn = [];
//   for (var i = 0; i < 3; i++) {
//     (function (j) {
//       function fn() {
//         console.log(j);
//       }
//       arrFn.push(fn);
//     })(i);
//   }
//   return arrFn;
// }

// Infinite currying
function counter(args) {
  let count = 0;
  count++;
  if(args == 0){
    return count;
  }else{
    return function inner(args){
        count++;
        if(args == 0) return count;
        else return inner
    }
  }
}

console.log(counter(0)); //1
console.log(counter()(0)); //2
console.log(counter()()()()(0)); //5


// HW
// function sum(a,b,c){
//     return a+b+c;
// }
// sum(10,20,30); -> sumAll(10)(20)(30)();

//creating private variables using closure
// -> js allows us to create ovt variables using closure. 
function createEvenStack(){
    let items = []; 
    return {
        push(item){
            if(item%2==0){
                console.log("item is pushed");
                items.push(item);
            }else{
                console.log("pls input even value");
                
            }
        },
        pop(){
            return items.pop();
        },
        // get(){
        //     return items;
        // }
    };
}

const stack = createEvenStack();
stack.push(20);
stack.push(5);
console.log(stack.items);


//creating a memoized function 
// -> memoized fn improves performance when they are called with the same arguments repeatedly.

function calc(n){
    let sum =0;
    for(let i=0; i<n;i++){
        sum+=n;
    }
    return sum;
}

function memoize(fn){
    let cache = {}; //key -> n natural number , value -> sum   n =100 , value = 5050
    return function(n){
        //check if input is present in cache
        let isInputPresent = cache[n] ? true : false;
        if(isInputPresent) return cache[n];
        else{
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

let efficientCalc = memoize(calc);
console.time();
efficientCalc(200);
console.timeEnd();

console.time();
efficientCalc(200);
console.timeEnd();
