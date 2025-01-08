// library -> runMLAlgo

// it is an aysnc function 
function runMLAlgo(amount, cb) {
  //async tasks
  console.log("run ml algo function");
  console.log("checking payment gateway", "asigning payment gateway");
  console.log("checks , balance, check the stock");
  setTimeout(() => {
    cb();
    cb();
    cb();
    cb();
  }, 1000);
}

module.exports = { runMLAlgo };
