import React from 'react'

function EventHandler() {

    const handleParentClick = () => {
        console.log("parent button is called");
    }

    const handleChildClick = () => {
        console.log("child button is called");
    }

  return (
    <div onClick={handleParentClick}> Parent
      <button onClick={handleChildClick}>Child Click</button>
    </div>
  )
}

export default EventHandler
