import React, { useEffect, useState } from 'react'

function UseEffectVariations() {
    console.log("setting up states");
    const [count,setCount] = useState(0);
    const [name,setName] = useState("->");
    //whenevr there is a change in count state , i am going to be called 
    // is used to perform functions which take time , to perform side effects 
    //anything that takes time and can block the UI . 

    useEffect(() => {
        //this UE is called only onece after the initial render
        //usefull for gettng data via api for initial render
        console.log("UE1 is called");
    }, []);//empty dependency array 

    useEffect(() => {
        //this UE is called everytime when there is a state change
        console.log("UE2 is called");
    });//w/o dependency array 


    useEffect(() => {
        console.log("UE3 is called");
        document.title = `You clicked ${count} times`
    }, [count]);//dependency array 

    useEffect(() => {
        console.log("UE4 is called");
        const timerId = setInterval(() => {
            console.log("Timer tick");
        }, 1000);

        //cleanup
        return () => {
            console.log("cleaning up");
            clearInterval(timerId);
        }
    },[count]) //runs only once on mount

    

    console.log("loading UI");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <button onClick={()=>setName(name+"NextName")}>change name</button>
      <p>{name}</p>
    </div>
  )
}

export default UseEffectVariations
