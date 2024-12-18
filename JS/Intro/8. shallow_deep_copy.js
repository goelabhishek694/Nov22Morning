//general ccode for copy in JS

//shallow copy

// 1. spread operator

// 2. objct.assign (target, source)

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//    },
// };

// let copiedObj = Object.assign({},person);
// console.log(copiedObj);
// copiedObj.address.street = "2nd street";
// console.log(person);

//deep copy

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//   },
//   greet: function () {
//     console.log("hello");
//   },
//   friends : ["A","B"]
// };

// let stringifiedObj = JSON.stringify(person);
// console.log(stringifiedObj);
// ('{"firstName":"John","lastName":"Doe","address":{"street":"North 1st street","city":"San Jose","state":"CA","country":"USA"}}');
// console.log(typeof stringifiedObj);

// let newObj = JSON.parse(stringifiedObj);
// newObj.address.street = "2nd street";
// console.log(person);
// console.log(newObj);

// JSON.parse requires regex matching that is very slow so we ussualy avoid it wherever possible . 



//polyfill of deep copy 

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray",{ name: "Jai", lastName: "Roy" }]
};

// 1. create a newObj 
// 2. traverse over the obj  
// 3. assign key values to newObj 
// 4. return the newObj 

// for in  -> index -> key
// [10,20,30] -> [0: 10,1: 20,2: 30]
// for of -> value 

let superClone = (obj) => {
    let isArr = Array.isArray(obj);
    let cloning = isArr ? [] : {};
    for(let key in obj){
        //address
        if(typeof obj[key] == 'object'){
            let clonedObj = superClone(obj[key]);
            cloning[key] = clonedObj
        }
        else cloning[key] = obj[key];
    }
    return cloning
}

let deepClonedObj = superClone(person);
console.log(deepClonedObj);

//lodash -> deepClone




