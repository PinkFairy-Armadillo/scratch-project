import React, { Component } from 'react';
import { render } from 'react-dom';


class RestaurantsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        name: '',
        image_url: '',
        rating: '',
        categories: '',
        reviews: '',
        price: '',
        location: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/businesses') // TAKE FROM THE SERVER PART AND MAKE SURE THAT WE HAVE ~40 OBJECTS
        .then((data) => data.json())
        .then((data) => console.log(data)) // MAKE SURE THAT WE HAVE AN ARRAY OF OBJECTS
        // .then((res))
        .then((data) => {
          let name = []
          let image_url = []
          let rating = []
          let categories = []
          let reviews = []
          let price = []
          let location = []
          data.map(el => {
            name.push(el.name)
            image_url.push(el.image_url)
            rating.push(el.rating)
            categories.push(el.categories)
            reviews.push(el.reviews)
            price.push(el.price)
            location.push(el.location)
          })  
          this.setState({...this.state, name: name, image_url: image_url, rating: rating, categories: categories, reviews: reviews, price: price, location: location })
        }).catch(error => {
          ({
            log: `fetch request error in restaurants feed. Error getting restaurants data from data base: error code ${error.status}`,
            message: { error: 'Error occurred during fetch request from Restaurants feed' },
          })
        })
  }

  render() {
    const boxes = [];
    for (let i=0; i<5; i++) {
      boxes.push(<RestaurantCard 
        key={i}
        name ={this.state.name[i]}
        image_url ={this.state.image_url[i]} 
        rating={this.state.rating[i]}
        categories={this.state.categories[i]}
        reviews={this.state.reviews[i]}
        price={this.state.price[i]}
        location={this.state.location[i]}        
        // handleClick={this.handleClick}
      />)
    }

    return (
      <div className='restaurantContainer'>
        {boxes}
      </div>
    );
  }
}

class RestaurantCard extends Component {
  render() {
    // console.log('object props: ', this.props);
    return (
      <div className='restaurantWrapper'>
        <img src={this.props.image_url} />
        <p>Name: {this.props.name}</p>
        <p>Rating: {this.props.rating}</p>
        <p>Categories: {this.props.categories}</p>
        <p>Reviews: {this.props.reviews}</p>
        <p>Price segment: {this.props.price}</p>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}
  

export default RestaurantsFeed;
