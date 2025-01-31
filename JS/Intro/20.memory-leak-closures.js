let theThing = null;
let replaceThing = function(){
    console.log("something");
    let originalThing = theThing; 
    let unused = function(){
        if(originalThing){
            console.log("hi");
        }
    }
    theThing = {
        longStr : new Array(1000000),
        someMethod : function() {
            console.log("Bye");    
        }
    }
}

// setInterval(() => {
//     replaceThing();
// }, 1000);

// pointing them to null
//automatic garbage collection -> 