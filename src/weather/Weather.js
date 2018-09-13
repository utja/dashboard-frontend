import React from 'react'

const Weather = (props) => {


  return(
    <div className="weather">
      <h1>{props.weather.weather}</h1>
      <h2>Temperature: {props.weather.temperature}</h2>
    </div>
  )
}

export default Weather
