// Call -> borrowing a function from the object and can be used for another object without actually adding to it . 


// let cap = {
//     name: "Steve",
//     team: "cap",
//     petersTeam: function(mem1, mem2){
//         console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} `);
//     }
// }

// cap.petersTeam();

// let ironMan = {
//     name: "Tony", 
//     team: "iron man",
// }
// // dry -> do not repeat yourself 
// //path to function def call(this->obj, "","","")
// cap.petersTeam.call(ironMan,"natasha", "war machine");

//Apply -> Apply is sued to borrow a function for n numebr of parameters. 


// let cap = {
//     name: "Steve",
//     team: "cap",
//     petersTeam: function(mem1, mem2, ...otherMen){
//         console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} and ${otherMen}`);
//     }
// }

// let ironMan = {
//     name: "Tony", 
//     team: "iron man",
// }

// cap.petersTeam.apply(ironMan, ["natasha","war machine", "doctor strange", "loki"])


//Bind


// let cap = {
//     name: "Steve",
//     team: "cap",
//     petersTeam: function(mem1, mem2){
//         console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} `);
//     }
// }

// let ironMan = {
//     name: "Tony", 
//     team: "iron man",
// }

// let ironManBinded = cap.petersTeam.bind(ironMan,"natasha", "war machine");
// ironManBinded();

// let ironManBinded = cap.petersTeam.bind(ironMan);
// console.log(ironManBinded);
// ironManBinded("natasha", "war machine")



// !------------POLYFILLS-----------!
//  cal apply -> dec 1999 ES-3 -> they wanted polyfill for bind 
//  bind -> 2009 ES-5

let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} `);
    }
}

let ironMan = {
    name: "Tony", 
    team: "iron man",
}

Function.prototype.myCall = function(obj, ...args){ //collecting my arguyments in an array 
    // fn -> this 
    console.log(this);
    console.log(args);
    
    let fn = this;
    //fn() // this -> window no . i want this -> obj
    obj.foo = fn ;
    obj.foo(...args) // this -> obj   , spreading my arguments from array in individual values 
    delete obj.foo
}

cap.petersTeam.myCall(ironMan,"natasha", "war machine") //this -> cap.petersTeam


// HW 
// apply bind 