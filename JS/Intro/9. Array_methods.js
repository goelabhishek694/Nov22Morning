// splice 

// Array.splice(startIdx,deleteCount,item1,...itemN);

//og array is modified 
// let arr = [10,20,30,40,50,60];
// let splicedArr = arr.splice(2,3,300,400);
// console.log(arr); //remaining ele
// console.log(splicedArr); // ele removed 
// arr.splice(0) -> if it is going to shallow or deep copy 

//slice(startIdx,endIdx) -> (include,exclude)

// og arr is not modified
// let arr = [10,20,30,40,50,60];
// let slicedArr = arr.slice(1,4);
// console.log(arr);
// console.log(slicedArr);

//concat 
// let arr1 = [10,20,30,40,50,60];
// let arr2 = [70,80,90];
// let concatArr = arr1.concat(arr2);
// console.log(concatArr);
// console.log(arr1);
// console.log(arr2);

//split 
// let str = "Hi! my name is Pragnesh";
// let arrStr = str.split(" ");
// console.log(arrStr);

//join
// let str = "Hi! my name is Pragnesh";
// let arrStr = str.split(" ");
// let joinedStr = arrStr.join("@");
// console.log(joinedStr);

//trim 
let str = `            Hi! my name is Pragnesh               `;
console.log(str);
console.log(str.length);
str = str.trim();
console.log(str.length);
console.log(str);



