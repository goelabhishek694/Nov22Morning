import React, { useState } from 'react'
import ChildComponent from './ChildComponent';


function ParentComponent() {
    const [count,setCount] = useState(0);
    const [name, setName] = useState("Gopi Krishna S");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent name={name}/>
    </div>
  )
}

export default ParentComponent
