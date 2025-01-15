// object -> property keys -> string 
let obj ={
    name: "Scaler"
}
// 1. string type  
// 2. symbol type 

// a sumbol is a unique identifier

// let id = Symbol();
let id1 = Symbol("id") //this description is also know as symbol name . mostlu usefulfor debugging 
let id2 = Symbol("id") //this description is also know as symbol name . mostlu usefulfor debugging 
//both of them are unique

console.log(id1 == id2); //primitve uniqye value 
//symbols do not get auto converted to string

// alert(id1); 
// alert(id1.toString()); 
// alert(id1.description); 


// hidden properties
//symbols allown us to create hidden properties of an object. no other part of ocde can access/overwrite it 

let user = {
    name: "Jhon"
}

let id = Symbol("id");
user[id] = 1; 

console.log(user[id]);

for(let data in user){
    console.log(data);
}

//Object.assign -> it can access the symbols 

let newObj = Object.assign({}, user);
console.log(newObj);

