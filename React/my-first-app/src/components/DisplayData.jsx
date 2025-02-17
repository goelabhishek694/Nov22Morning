import React from "react";

function DisplayData({ fruits, buyer }) {
  console.log(fruits, buyer);

  //   code below is JSX
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {/* single line  */}
      {/* {fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)} */}
{/* some processing  */}
        {fruits.map((fruit, idx) => {
          fruit = fruit.toUpperCase();
          return <li key={idx}>{fruit}</li>;
        })}
        {/* return an array of html */}
        {/* {
          [<li>{fruits[0]}</li>, <li>{fruits[1]}</li>, <li>{fruits[2]}</li>]
        } */}
      </ul>

      <h2>Buyer Details</h2>
      {Object.keys(buyer).map((key) => (
        <p>
          {key}: {buyer[key]}
        </p>
      ))}
    </div>
  );
}

export default DisplayData;
