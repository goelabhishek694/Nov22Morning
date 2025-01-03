//object literals

// const candidate = {
//     firstName : "Venkata",
//     class: 12
// };

// console.log(candidate.firstName);


// const num = 100.123;

// console.log(num.toFixed(2));

// for string -> const str = "hey"; -> primitve 

// str. -> js understands , needs to access methods and properties . 
// it wraps our str variables using a String class 
// const str = new String("hey");

// str.

//Object.create()
//creates a new object and links it to the protoype of an existing object 

// Object.create(proto, propertiesObject)
// proto -> represents prototype of new Object
// propertiesObject -> it is sued to pecify which property descriptors should be added to the newly created object 

// creating the prototype for the object that will be created later
// function greeting(){
//     this.greeting = "Hello Venkata";
// }

// console.log(greeting.prototype);


// // using the object.create() method to create a function whose object inherits properties from the prototype
// function greetVenkata(){
//     console.log(this);
//     greeting.call(this);
// }

// console.log(greetVenkata.prototype);


// // creating an greetMuthu function object with the prototype object's properties (such as greeting)
// greetVenkata.prototype = Object.create(greeting.prototype);
// const app = new greetVenkata();
// // Displaying the object created
// console.log(app.greeting);


// //cretae an object without any parent
// var a = Object.create(null);
// var b = {};

// // create an object from another object 

// let candidate = {
//     firstName : "Venkata",
//     age: 24,
//     job: "developer"
// }

// let pickNameAndAge = function(record){
//     return {
//         name: record.firstName,
//         age: record.age
//     }
// }

// let Venkata = pickNameAndAge(candidate);
// console.log(Venkata);


//iterate using for in loop


// const candidate = {
//     firstName :"Venkata",
//     lastName: "Siva"
// }

// for(key in candidate){
//     console.log(key.toUpperCase());
//     console.log(candidate[key]);
// }

// Object.keys(obj)

// let std1 = Object.keys(candidate);
// console.log(std1);


// class Candidate {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello World i am ${this.name}`);
//     }
// }

// //inherit parent class
// class User extends Candidate{
//     //this code is added by default 
//     // constructor(props){
//     //     props = props.toUpperCase()
//     //     super(props) //constructor of parent class is called 
//     // }
// }

// let c1 = new User("Karunakar");
// console.log(c1);
// c1.greet();

//using function constructor method in js before es6

// in js constructor mehtod can also be utilized to create an Object
// an object instance of the class is created by method 
// in this method, an object type is defined using the constructor method 

// syntax
// function Constructor(property){
//     this.property = property;
//     let newObject = new Constructor("objectValue")
// }
// Following is a description of the parameters.

// Constructor: a method for initializing class objects.
// newObject: Represents An object that has just been created
// property: Describes the existing properties of an object
// objectValue: Identifies the value assigned to the object.


// function Class(name, age){
//     this.firstName = name;
//     this.age=age;
//     //
// }

// let c1 = new Class("Venkata",24); //-> empty object is created , this -> {}
// let c2 = new Class("Karunakar",23);
// let c3 = new Class("Anbazhagan",21);

// console.log(c1.firstName);
// console.log(c2.firstName);
// console.log(c3.firstName);

// let candidate = {
//     fly:true,
//     canTalk(){
//         return "Sorry, cant talk"
//     }
// };

// let user = {
//     canCook : true,
//     canCode(){
//         return "can't code"
//     },
//     //inheriting the properties and methids of candidate 
//     __proto__ : candidate
// };

// console.log(user);

//Object Descriptors

//read-only property
// const obj ={};
// Object.defineProperty(obj, "name", {
//     value : "Scaler",
//     writable:false,
//     enumerable: true,
//     configurable: false
// });

// console.log(obj.name);
// obj.name = "InterviewBit" //-> does not happen
// console.log(obj.name);

//non-enumerable property

// const obj ={};
// Object.defineProperty(obj, "secret", {
//     value : "hidden",
//     writable:true,
//     enumerable: false,
//     configurable: false
// });

// // console.log(obj.secret);
// // obj.secret = "InterviewBit" //-> does not happen
// // console.log(obj.secret);

// console.log(Object.keys(obj)); //-> it traverses over the entore object and returns an array of all the keys in object obj 
// console.log(obj.secret);

// delete obj.secret;
// console.log(obj.secret);

// //configurable property 
// const obj ={};
// Object.defineProperty(obj, "age", {
//     value : 30,
//     writable:true,
//     enumerable: true,
//     configurable: true
// });

// obj.age=25;
// console.log(obj.age);
// console.log(Object.keys(obj));
// delete obj.age;
// console.log(obj.age);


let obj = {
    name:"Scaler"
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));










