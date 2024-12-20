let arr = [10,13,56,89,78,9,53,34];

//give me an array of all even numbers 

function isEven(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let ele = arr[i];
        if(ele%2 == 0) {
            newArr.push(ele);
        }
    }
    return newArr;
}

let evenArr = isEven(arr);
console.log(evenArr);

//give me an array of all odd numbers 

function isOdd(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let ele = arr[i];
        if(ele%2 != 0) {
            newArr.push(ele);
        }
    }
    return newArr;
}

let oddArr = isOdd(arr);
console.log(oddArr);

// !--------------------------------------------------!

//logics

function isGreaterThan25(ele){
    return ele>25
}

//creating a traverse function so that we dont have to write the repetitive code 
function traverse(arr, logic){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let ele = arr[i];
        if(logic(ele)) {
            newArr.push(ele);
        }
    }
    return newArr;
}

let arr3 = traverse(arr,isGreaterThan25);
console.log(arr3);
