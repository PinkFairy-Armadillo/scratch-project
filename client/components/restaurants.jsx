import React, { Component } from 'react';
import { render } from 'react-dom';
// import './eventsStyle.scss';
import RestaurantsFeed from './restaurantsfeeds.jsx';
import RestaurantsFilter from './restaurantsfilter.jsx';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div id='restaurantsFeed'>
        <RestaurantsFilter />
        <RestaurantsFeed />    
      </div>
      
    );
  }
}


export default Restaurants;
