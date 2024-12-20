let arr = [10,13,56,89,78,9,53,34];

//give me an array of all even numbers 

// function isEven(arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         let ele = arr[i];
//         if(ele%2 == 0) {
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }

// let evenArr = isEven(arr);
// console.log(evenArr);

//give me an array of all odd numbers 

// function isOdd(arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         let ele = arr[i];
//         if(ele%2 != 0) {
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }

// let oddArr = isOdd(arr);
// console.log(oddArr);

// !--------------------------------------------------!

//logics

// function isGreaterThan25(ele){
//     return ele>25
// }

// function isEven(ele){
//     return ele%2 == 0
// }

// function isOdd(ele){
//     return ele%2 != 0
// }
    

//creating a traverse function so that we dont have to write the repetitive code 
// function traverse(arr, logic){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         let ele = arr[i];
//         if(logic(ele)) {
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }
//traverse is an HOF 
//isEven, isOdd, isGreaterThan25 are examples of cb functions
// let arr1 = traverse(arr, isEven)
// let arr2 = traverse(arr, isOdd)
// let arr3 = traverse(arr,isGreaterThan25);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

let balanceSheet = [1000,-300,2000,4000,-1500];

// Task 1 : print out your bank statement 
//forEach
//we are going to traverse over arr and access each ele 
//for each ele in array a function is executed
//arr.forEach(fn);
// forEach is only used for traversing , it does not return anything . 

let rVal = balanceSheet.forEach((ele) => {
    console.log("$",ele);
    return 100;
})

console.log(rVal);

//Task 2: convert my bank statement from usd to inr 
//map 
//for each ele in an array a function is excuted and the result is pushed into an array . the retunred array is of same length as that of the array which is ued for traversal. 

let bankStatementInINR = balanceSheet.map((ele) => {
    let usdToInr = ele*85;
    return usdToInr;
})

console.log(bankStatementInINR);

// Task 3: i want to see statemnt of the money credited into my account
//filter 
// for each ele in array a function executed , if the ele fulfills the criteria then it is pushed into arr. 

let moneyCreditedStatement = bankStatementInINR.filter((ele) => {
    // if(ele > 0){
    //     return ele
    // }
    return ele>0 //true false
});
console.log(moneyCreditedStatement);

let moneyDebitedStatement = bankStatementInINR.filter((ele) => {
    if(ele < 0){
        return ele
    }
});
console.log(moneyDebitedStatement);


//Task4 : total blance in my account 
{
// function sumAll(arr){
//     //initial value
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         //accumulate the value 
//         sum = sum + arr[i];
//     }
//     return sum
// }

// console.log(sumAll(arr));
}

//reduce
// to tranform your array into a single item 
// let balanceSheet = [1000,-300,2000,4000,-1500];
let accountBalance = balanceSheet.reduce((acc, curr) => {
    console.log("acc", acc, " curr ", curr);
    acc = acc+ curr;
    return acc;
},0)
console.log(accountBalance);

//composability
// chain methods 

// all my expenses in inr
// [-300,-1500] -> [-25500,-127500]
console.log(balanceSheet.filter(ele => ele<0).map(ele=>ele*85));



//Interview Questions 
const worldCapitals = [
    {
      country: "India",
      capital: "Delhi",
      population: "2cr",
    },
    {
      country: "America",
      capital: "Washington DC",
      population: "6cr",
    },
    {
      country: "France",
      capital: "Paris",
      population: "2cr",
    },
  
    {
      country: "England",
      capital: "London",
      population: "4cr",
    },
    {
      country: "Germany",
      capital: "Berlin",
      population: "2cr",
    },
  ];

 //Q1 print country name and their capital  
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin] 
// let newArr = [];
// for(let i=0;i<worldCapitals.length;i++){
//     newArr.push(worldCapitals[i].country+"->"+worldCapitals[i].capital);
// }
// console.log(newArr);

let ans = worldCapitals.map(({country, capital}) => {
    return country+"->"+capital
});
console.log(ans);



//Q2-> Return the number of countries with a particular population 
//{ 2cr: 3, 4cr: 1, 6cr: 1 }
let populationObj = worldCapitals.reduce((obj,curr) => {
    let population = curr["population"]; //2cr
    if(obj[population]){
        obj[population]= obj[population] +1;
    }else{
        obj[population] = 1;
    }
    return obj;
},{});
console.log(populationObj);


//Q3 get country name with population less than 5cr
//[India, France,England,Germany]

let country = worldCapitals.filter(obj=> obj.population < "5cr").map(obj=>obj.country);

console.log(country);

let country2 = worldCapitals.reduce((acc,curr) => {
    if(curr["population"] < "5cr"){
        acc.push(curr.country);
    }
    return acc;
},[]);
console.log(country2);


//polyfills

//map
Array.prototype.myMap = function(logic){
    // this -> arr
    let newArr =[];
    for(let i =0;i<this.length;i++){
        let ele = this[i];
        let ans = logic(ele);
        newArr.push(ans);
    }
    return newArr;
}
const logic = (ele) => {
    let usdToInr = ele*85;
    return usdToInr;
}
let rArr = balanceSheet.myMap(logic);
console.log(rArr);

//filter 
Array.prototype.myFilter = function(logic){
    // this -> arr
    let newArr =[];
    for(let i =0;i<this.length;i++){
        let ele = this[i];
        let ans = logic(ele); //true false
        if(ans) newArr.push(ele);
    }
    return newArr;
}
const filterLogic =(ele) => {
    if(ele < 0){
        return ele
    }
}
let filteredArr = balanceSheet.myFilter(filterLogic);
console.log(filteredArr);

//reduce

Array.prototype.myReduce = function(logic, initialVal){
    let acc = initialVal!=undefined?initialVal:this[0];
    let si = initialVal!=undefined?0:1;
    for(let i = si;i<this.length;i++){
        let ans = logic(acc,this[i]);
        acc = ans;
    }
    return acc;
}
const reducerLogic = (acc, curr) => {
    console.log("acc", acc, " curr ", curr);
    acc = acc+ curr;
    return acc;
};
let output = balanceSheet.myReduce(reducerLogic, 0);
console.log(output);
