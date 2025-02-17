import React from 'react'

function DisplayData({fruits, buyer}) {
    console.log(fruits, buyer);
    
//   code below is JSX
    return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {
            fruits.map((fruit, idx) => <li key={idx} >{fruit}</li>)
        }
      </ul>

      <h2>Buyer Details</h2>
      {
        Object.keys(buyer).map(key => <p>{key}: {buyer[key]}</p>)
      }
    </div>
  )
}

export default DisplayData
