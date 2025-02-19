import React from 'react'

function ChildCounter({count}) {
    console.log("child is re-rendered");
    count++;
    const handleClick = () => {
        console.log("clicked on heading");
        count++; //it is not incremented , becayuse count is a prop, it is immutable. 
    }
  return (
    <div>
      <h4 onClick={handleClick}>I am Child of Counter.jsx Component</h4>
      <p>{count}</p>
    </div>
  )
}

export default ChildCounter
