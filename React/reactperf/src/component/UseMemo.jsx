import React from "react";
import { useState, useMemo } from "react";

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 10000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};

const sumArray = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

function LargeArraySum() {
  const [count, setCount] = useState(0);
  console.time();
  const largeArray = useMemo(() => generateLargeArray(), []);
  const sum = useMemo(() => sumArray(largeArray), [largeArray]);
  console.timeEnd();
  return (
    <div>
      <h1>Sum : {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count : {count} </p>
    </div>
  );
}

export default LargeArraySum;


//<--------------------2nd Usecase-------------------------->
//prevents uncessary re-renders in child components

// import { useState, useMemo } from "react";
// import ChildComponent from "./ChildComponent";

// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   // Without useMemo, a new object is created on every render
//   //   since new ref is created on every renderMatches, chold component see it as a change in prop data , so it re-renders
//   const object = { key: "value" }

//   //refernce of the object remain the same , so chld components seeit as no chnage in prop data , so it does not re-render
//   const memoizedObject = useMemo(() => ({ key: "value" }), []);

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ChildComponent data={memoizedObject} />
//     </>
//   );
// }
