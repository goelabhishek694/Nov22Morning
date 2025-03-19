import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './Components/ClassComp'
import TodoClass from './Components/TodoClass'
import TodoFunc from './Components/TodoFunc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ClassComp name="Anuroop"/> */}
    {/* <TodoClass/> */}
    <TodoFunc/>
    </>
  )
}

export default App
