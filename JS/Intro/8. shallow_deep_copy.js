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
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
  friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
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
  for (let key in obj) {
    //address
    if (typeof obj[key] == "object") {
      let clonedObj = superClone(obj[key]);
      cloning[key] = clonedObj;
    } else cloning[key] = obj[key];
  }
  return cloning;
};

let deepClonedObj = superClone(person);
console.log(deepClonedObj);

//lodash -> deepClone

// check if the logic id able to handle -> [[]]


// flatten an array 

let input = [10,20,[[[30,40],50],60]]; 
// 1. create a newArr
// 2. traverse over the srcArr
// 3. assign values to newArr
// 4. return the newArr

function flatttenArr(n,srcArr){
    if(n==0) return srcArr;
    let newArr =[];
    for(let i=0;i<srcArr.length;i++){
        let ele = srcArr[i];
        if(Array.isArray(ele)){
            let smalleFlattenArr = flatttenArr(n-1, ele);
            newArr.push(...smalleFlattenArr);
        }
        else newArr.push(ele);
    }
    return newArr
}

let op = flatttenArr(2, input);
console.log(op);

//Bonus question -> flattenArr(n) n=2; 
// [10,20,[[[30,40],50],60]] -> [10,20,[30,40],50,60]

// Bonus question 
// Object flatenning 
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     address: {
//       street: "North 1st street",
//       city: "San Jose",
//       state: "CA",
//       country: "USA",
//     }
//   };
// 1D object -
// person ={
//     firstName: "John",
//     lastName: "Doe",
//     address.street: "North 1st street",
//     address.city: "San Jose",
//     address.state: "CA",
//     address.country: "USA",
// }