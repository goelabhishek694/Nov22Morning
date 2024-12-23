// let varName = 10;
// function b(){
//     console.log("in b", varName);
// }

// function fn(){
//     let varName = 20;
//     b();
//     console.log(varName);
// }

// fn();

function outerFunction(){
    let count =0;
    function innerFunction(){
        let varName= "Scaler";
        count++;
        return count;
    }
    return innerFunction
}

// console.log(count); //we cannot access the variable outside a function 


const innerFunction = outerFunction();
console.log(innerFunction()); //1 (local scope + lexical scope ) -> closure
console.log(innerFunction()); //2 

// function along with it's lexical scope froms closure. 

function createCounter(init, delta){
    function count(){
        init+=delta;
        return init;
    }
    return count
}

let c1 = createCounter(10,5);
let c2 = createCounter(5, 2);

console.log(c1()); //15
console.log(c2()); //7
console.log(c1()); // 20
console.log(c2()); // 9

//nested closures
let iamInGEC = 200;
function getFirstName(firstName){
    console.log("i have got your first name");
    return function getLastName(lastName){
        console.log("i have got your last name");
        return function(){
            console.log(`Hi i am ${firstName} ${lastName}`); //nested closure 
            console.log("Hi GEC", iamInGEC); //lexical scope chaining
        }
    }
}

const fName =  getFirstName("Arpan");
const lName =  fName("Gorai");

lName();
