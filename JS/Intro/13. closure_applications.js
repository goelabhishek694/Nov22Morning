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

// HW
// function sum(a,b,c){
//     return a+b+c;
// }
// sum(10,20,30); -> sum(10)(20)(30);

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

function outer() {
  let arrFn = [];``
  for (var i = 0; i < 3; i++) {
    function fn() {
      console.log(i);
    }
    arrFn.push(fn);
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // 0
arrFn[1](); // 1
arrFn[2](); // 2
