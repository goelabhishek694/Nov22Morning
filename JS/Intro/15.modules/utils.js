//named exports 
//we cane export multple files
//these items can include functions,variables,classes
export function greet(name){
    console.log(`Hello ${name} !`);
}

export const PI = 3.14159;

//default exports
//a single export for each module 
//this ise usefule when we have to export a primary functionality like class

function multiply(a,b){
    return a*b;
}

export default multiply;