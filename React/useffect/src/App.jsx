import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectVariations from './Components/UseEffectVariations'
import FetchData from './Components/FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseEffectVariations/> */}
      <FetchData/>
    </>
  )
}

export default App
