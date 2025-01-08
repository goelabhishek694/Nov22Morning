const {runMLAlgo} = require("./lib.js");
console.log("Before");
let amount = 100000;
let priceOfOne = 20000;

runMLAlgo(amount,cb);
function cb() {
    //deducting the amount from bank
    console.log("deducting payment");
    amount = amount - priceOfOne;
    console.log("Amount- ",amount);
}

console.log("After");