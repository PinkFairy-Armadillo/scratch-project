import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NewsView from './components/NewsView.jsx';
import './styles.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <NewsView />
    )
  }
}

export default App;