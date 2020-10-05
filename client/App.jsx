import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import WeatherView from './components/WeatherView.jsx';
import NewsView from './components/NewsView.jsx';
import ActivitiesView from './components/ActivitiesView.jsx';
import './styles.css';
import DetailedWeather from './components/DetailedWeather.jsx';
import Search from './components/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div className="container-fluid main-content">
                <Search />
                <NewsView />
                <ActivitiesView />
              </div>
            </Route>
            <Route exact path="/detailed-weather">
              <DetailedWeather />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
