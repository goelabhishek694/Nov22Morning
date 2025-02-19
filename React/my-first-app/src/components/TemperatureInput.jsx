import React, { useState } from 'react'

function TemperatureInput({temperature,handleTemperatureChange}) {
    const handleTemperature = (e) => {
      handleTemperatureChange(e.target.value)
    }
  return (
    <div>
      <label>Enter Temperature</label>
      <input 
      type="text" 
      value = {temperature} 
      onChange={handleTemperature} />
    </div>
  )
}

export default TemperatureInput
