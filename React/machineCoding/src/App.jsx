// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './Components/UseRefDom'
import Timer from './Components/UseRefPersist'
import Stopwatch from './Components/Stopwatch'
import Carousel from './Components/Carousel'
import Modal from './Components/Modal'
import useVisibility from './useVisibility'

function App() {
  // const [count, setCount] = useState(0);
  const {isVisible, hide, show, toggle} = useVisibility(true);
  return (
    // <FocusInput/>
    // <Timer/>
    // <Stopwatch/>
    // <Carousel/>
    <Modal isVisible={isVisible} hide={hide}/>
  )
}

export default App
