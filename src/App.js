import React, { Component } from 'react';
import './App.css';
import NewsContainer from './news/NewsContainer'
import WeatherContainer from './weather/WeatherContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar'
import Home from './home/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path ="/" component={Home} />
          <Route exact path ="/news" component={NewsContainer} />
          <Route exact path ="/weather" component={WeatherContainer} />
          {/* <NewsContainer /> */}
          {/* <WeatherContainer /> */}
      </div>
      </Router>
    );
  }
}

export default App;
