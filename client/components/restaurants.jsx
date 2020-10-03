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
      <div className='restaurantsFeed'>
        <h1>Restaurants around you</h1>
        <RestaurantsFilter />
        <RestaurantsFeed />    
      </div>
      
    );
  }
}


export default Restaurants;
