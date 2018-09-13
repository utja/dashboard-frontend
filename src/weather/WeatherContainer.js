import React from 'react'
import WeatherList from './WeatherList'
const WEATHERENDPOINT = 'http://localhost:3000/api/v1/weather'


class WeatherContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      allWeather: [
        {id: 1, weather: 'Rain', temperature: '72'},
        {id: 2, weather: 'Sunny', temperature: '75'}
      ]
    }
  }

  // componentDidMount(){
  //   // once mounted, set state with data from backend (WEATHERENDPOINT)
  //   this.getAllWeather().then(data => this.setState({allWeather: data}))
  // }

  //async, await to fetch news articles from database
  getAllWeather = async () => {
    try {
      const weatherData = await fetch(WEATHERENDPOINT).then(r => r.json())
      return weatherData
    } catch (err) {
      console.log('hello', err)
    }
  }

  render(){
    return(
      <div className="weather-container">
        <h1>Hello from Weather Container</h1>
        <WeatherList allWeather={this.state.allWeather}/>
      </div>
    )
  }
}

export default WeatherContainer
