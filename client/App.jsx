import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WeatherView from './components/WeatherView.jsx';
import NewsView from './components/NewsView.jsx';
import './styles.css';
import DetailedWeather from './components/DetailedWeather.jsx';


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
              <WeatherView />
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