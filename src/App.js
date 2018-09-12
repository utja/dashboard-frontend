import React, { Component } from 'react';
import './App.css';
import NewsContainer from './news/NewsContainer'
import WeatherContainer from './weather/WeatherContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Your Dashboard</h1>
          <h2>Add Settings Icon with User Login and Settings</h2>
        </header>
        <NewsContainer />
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
