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
import FrontPage from './components/FrontPage.jsx';


const App = props => {
 
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path={'/'}>
              <FrontPage />
            </Route>
            <Route exact path={'/detailed-weather'}>
              <DetailedWeather />
            </Route>
          </Switch>
        </div>
        </Router>
    )
  
}

export default App;