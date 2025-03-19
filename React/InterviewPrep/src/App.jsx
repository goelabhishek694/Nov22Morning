import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './Components/ClassComp'
import TodoClass from './Components/TodoClass'
import TodoFunc from './Components/TodoFunc'
import WithLoading from './Components/WithLoading'
import DataComp from './Components/DataComp'

function App() {
  const [count, setCount] = useState(0)
  const EnhancedDataComponent = WithLoading(DataComp);
  return (
    <>
    {/* <ClassComp name="Anuroop"/> */}
    {/* <TodoClass/> */}
    {/* <TodoFunc/> */}
    <EnhancedDataComponent data="Here is some data"/>
    </>
  )
}

export default App
