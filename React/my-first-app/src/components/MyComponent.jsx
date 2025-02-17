import React from 'react'

function MyComponent(props) {
    console.log("hello", props);
    let {name} = props;
  return (
    <div>
      <h1>Hi! my name is {name}</h1>
    </div>
  )
}

export default MyComponent
