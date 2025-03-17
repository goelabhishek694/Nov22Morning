import React, { useRef } from 'react'

function FocusInput() {
    const inputRef = useRef(null);
    console.log(inputRef);
    
    const focusInput = () => {
        //on click add a border around input tag
        inputRef.current.focus();
    }
  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput
