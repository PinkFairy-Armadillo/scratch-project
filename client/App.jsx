import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import WeatherView from './components/WeatherView.jsx';
import NewsView from './components/NewsView.jsx';
import Restaurants from './components/restaurants.jsx';
import './styles.css';
import DetailedWeather from './components/DetailedWeather.jsx';
import Search from './components/Search.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path={'/'}>
              <Search />
              <Restaurants />
              <NewsView />
            </Route>
            <Route exact path={'/detailed-weather'}>
              <DetailedWeather />
            </Route>
          </Switch>
        </div>
        </Router>
      // <div>
      //   <DetailedWeather />
      // </div>
    )
  }
}

export default App;