import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherView from './WeatherView.jsx';


const mapDispatchToProps = dispatch => ({
  addCity: (data) => dispatch(actions.addCity(data)),
});


//const BANNER_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1280px-Lower_Manhattan_skyline_-_June_2017.jpg';
const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event) => {
    // send to back end
    sendLocation(searchValue);
    event.preventDefault();

    
  }

  const sendLocation = (location) => {
    fetch(`/location/${location}`, {
      method: 'GET',
      headers: {
        "Content-Type": "Application/JSON"
      }
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data);
    })
    .catch(err => console.log('Location fetch ERROR: ', err));
  }

  return (
    <div className='hero-container'>
      <WeatherView />
      <div className='search-wrapper'>
        <h1><center>Find the best your city has to offer</center></h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <input className='search-input' type="text" value={searchValue} onChange={handleChange} />
          <input className='search-btn' type="submit" value="Search" />
        </form>
        </div>
    </div>  
  );
}
export default Search;