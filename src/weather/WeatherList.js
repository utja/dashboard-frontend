import React from 'react'
import Weather from './Weather'

const WeatherList = (props) => {
  console.log(props)
  console.log(props.allWeather)

  // map through newsArticles props to render each <NewsArticle />
  const mapAllWeather = () => props.allWeather.map(weather => <Weather key={weather.id} weather={weather} />)

  return(
    <div className="weather-list">
      <h1>Hello from Weather List</h1>
      {mapAllWeather()}
    </div>
  )
}

export default WeatherList
