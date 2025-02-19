import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import DisplayData from './components/DisplayData'
import ConditionalRendering from './components/ConditionalRendering'
import EventHandler from './components/EventHandler'
import Counter from './components/Counter'
import Form from './components/Form'
import AdvancedForm from './components/AdvancedForm'
import FormikForms from './components/FormikForms'
import TemperatureInput from './components/TemperatureInput'
import TemperatureDisplay from './components/TemperatureDisplay'

function App() {
  const fruits = ["Apple", "Banana","Cherry"];
  const person = {
    name:"Venkata",
    age: 40
  }
  const isLoggedIn = false;
  const userName = "Vanitha"

  const [temperature, setTemperature] = useState(""); 

  const handleTemperatureChange = (newTemp) => {
    setTemperature(newTemp)
  }

  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* <MyComponent name="Pragnesh"/>
      <MyComponent name="Anuroop"/>
      <MyComponent name="praveen"/>
      <MyComponent name="Rishabh"/> */}
      {/* <DisplayData fruits={fruits} buyer={person}/> */}
      {/* <ConditionalRendering isLoggedIn={isLoggedIn} username={userName}/> */}
      {/* <EventHandler/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <AdvancedForm></AdvancedForm> */}
      {/* <FormikForms/> */}
      <TemperatureInput temperature={temperature} handleTemperatureChange={handleTemperatureChange} />
      <TemperatureDisplay temperature={temperature}/>
    </>
  )
}

export default App
