//proxies are object that allow yout to intercept and cusotmize operations peformed on objects . 
// operations -> reading , writing , deleting 

//they can be used to define cusotm behaviour for fundamental operations on object . 


// let obj = {
//     eng: "English",
//     math: "Mathematics",
//     password : "asdfg"
// }

// obj["sci"] = "Science" //writing 

// // let user = {
// //     name: 
// //     email:
// //     password 
// // }


// //custom handler 
// let handler = {
//     get(target, prop){
//         if(prop in target && prop!=="password"){
//             return target[prop].toUpperCase();
//         } else throw new Error("property does not exist")
//     },
//     set(target, prop, value){
//         if(prop in target){
//             //only update
//             target[prop] = value
//         }else {
//             throw new Error("cannot add new property")
//         }
//     }
// }

// let proxiedObj = new Proxy(obj,handler);
// // console.log(proxiedObj.engs); //

// // proxiedObj.eng = "Hello"

// //target . prop = value 
// // proxiedObj.sci = "Science"
// console.log(proxiedObj);

// console.log(proxiedObj.password);
// proxiedObj.sst = "Social Studies"


//generator functions

function* generatorFunction(){
    //do some processing 
    let result1 =100;
    yield result1;
    yield 2;
    yield 3;
}

let genFunc =  generatorFunction();

console.log(genFunc.next());
console.log(genFunc.next());
console.log(genFunc.next());
console.log(genFunc.next());


