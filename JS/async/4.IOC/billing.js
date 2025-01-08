const {runMLAlgo} = require("./lib.js");
console.log("Before");
let amount = 100000;
let priceOfOne = 20000;

// runMLAlgo(amount,cb);
let p1 = runMLAlgo();
p1.then((data) => {
    cb();
})
function cb() {
    //deducting the amount from bank
    console.log("deducting payment");
    amount = amount - priceOfOne;
    console.log("Amount- ",amount);
}

console.log("After");