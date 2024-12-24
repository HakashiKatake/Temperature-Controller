import React from 'react'
import { useState } from 'react'
const App = () => {
  const [temperature, settemperature] = useState(10)
  const [temperatureColor, settemperatureColor] = useState("cold")

  const increaseTemperature = () => {
    if (temperature >= 30) {
      return
    }

    if (temperature >= 15 && temperature < 30) {
      settemperatureColor("hot")
      
    }

    if (temperature >= 10 && temperature < 15) {
      settemperatureColor("warm")
      
    }

    if (temperature < 10) {
      settemperatureColor("cold")
      
    }

    



    const newTemperature = temperature + 1
    if (newTemperature >= 15) {
      settemperatureColor("hot")
    } 
    settemperature(newTemperature)
  }

    

  const decreaseTemperature = () => {
    const newTemperature = temperature - 1
    if (newTemperature <= 15 && newTemperature > 10) {
      settemperatureColor("cold")
    } 

   

    if (temperature >= -15) {
      settemperatureColor("cool")
      
    }

    if (temperature >= -30) {
      return
      
    }
    settemperature(newTemperature)
  }
  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
      </div>
      <div className='buttons-container'>
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>

  )
}

export default App