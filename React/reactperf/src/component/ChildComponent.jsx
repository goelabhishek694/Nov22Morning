import React from 'react'

function ChildComponent(props){
    console.log("Child rendered");
    return (
        <p>Hi! my name is {props.name}</p>
    )
}

// export default ChildComponent
export default React.memo(ChildComponent);