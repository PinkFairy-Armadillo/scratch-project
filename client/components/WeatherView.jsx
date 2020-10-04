import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WeatherView = props => {
  
  const WEATHER_API_URI = '#';
  const weatherInfo = {
    dayName: 'Monday',
    imgURL: 'http://openweathermap.org/img/wn/01d@2x.png',
    hiTemp: '80',
    loTemp: '65',
  }
  const arrayOfDays = [ weatherInfo, weatherInfo, weatherInfo, weatherInfo ];
  const weatherArr = arrayOfDays.map(day => {
    return ( 
      <div className='weather-wrapper'>
        <strong><center>{day.dayName}</center></strong>
        <img src={day.imgURL}></img>
        <div className='temp-wrapper'>
          <p>{day.hiTemp}°F</p>
          <p>{day.loTemp}°F</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Local Weather Information</h1>
      <div className='weather-container'>
        {weatherArr}
      </div>
      <Link to={'/detailed-weather'}>
        <button>More Info</button>
      </Link>
    </div>
  );
}
export default WeatherView;