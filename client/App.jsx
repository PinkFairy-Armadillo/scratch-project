import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NewsView from './components/NewsView.jsx';
import Restaurants from './components/restaurants.jsx';
import './styles.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <NewsView />
      <Restaurants />
      </div>
    )
  }
}

export default App;