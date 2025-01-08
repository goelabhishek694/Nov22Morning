// library -> runMLAlgo

// it is an aysnc function
function runMLAlgo() {
  // //async tasks
  // console.log("run ml algo function");
  // console.log("checking payment gateway", "asigning payment gateway");
  // console.log("checks , balance, check the stock");
  // setTimeout(() => {
  //   cb();
  //   cb();
  //   cb();
  //   cb();
  // }, 1000);

  return new Promise((resolve, reject) => {
    //basic checks
    let basicChecks = false;
    setTimeout(() => {
      console.log("run ml algo function");
      console.log("checking payment gateway", "asigning payment gateway");
      console.log("checks , balance, check the stock");
      basicChecks = true;
      if (basicChecks) {
        resolve();
      }
      else reject("basic check criteria not met");
    }, 1000);
  });
}

module.exports = { runMLAlgo };
