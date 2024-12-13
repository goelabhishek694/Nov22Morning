let arr =[1,2,3,4];
console.log(typeof arr);

//accesing properties/methods of parent 
let str =arr.join("");
console.log(str);

//accesing properties/methods of grandparent 
console.log(arr.toString());

//advanatage of inheritance 

let numArr =[10,20,30,40];
// let sumofArray = numArr.sum();
// console.log(sumofArray);

Array.prototype.sum = function(){
    let sum = 0 ;
    for(let i =0;i<this.length; i++){
        sum = sum +this[i];
    }
    return sum;
}

let sumofArray = numArr.sum();
console.log(sumofArray);

let ar =[10,2,54,-34]
console.log(ar.sum());
