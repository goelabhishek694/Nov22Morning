import React, { useState } from "react";
import ChildCounter from "./ChildCounter";

function Counter() {
  //since count is a variable and not a state, so my comp will not re-render , if comp does not re-render, latest value of count cannot be shown.
  // var tnp = 0;  //total no of products

  const [count, setCount] = useState(0); //this line is executed only once .
  //count -> name of the state
  //setCount-> func to update state
  //useState(0) -> initial value of state , here it is zero
  const handleIncrement = () => {
    console.log("adding one product to cart");
    // tnp++;
    setCount(count + 1);
  };

  const handleDecrement = () => {
    console.log("removing one product from cart");
    // tnp--;
    if(count==0) return;
    setCount(count - 1);
  };
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <ChildCounter count={count}/>
    </div>
  );
}

export default Counter;
