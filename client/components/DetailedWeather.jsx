import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DetailedWeather = props => {
  
  const WEATHER_API_URI = '#';
  const weatherInfo = {
    dayName: 'Monday',
    description: 'Clear Sky',
    imgURL: 'http://openweathermap.org/img/wn/01d@2x.png',
    currentTemp: '75',
    hiTemp: '80',
    loTemp: '65',
    humidity: '100',
    windSpeed: '10',
    sunRise: '06:30',
    sunSet: '19:00'
  }

  const arrayOfDays = [ weatherInfo, weatherInfo,
    weatherInfo, weatherInfo ];
  const weatherArr = arrayOfDays.map(day => {
    return ( 
      <div className='detailed-weather-wrapper'>
        <div className='detailed-weather-title'>
          <strong><center>{day.dayName}</center></strong>
          <img src={day.imgURL}></img>
        </div>
        <p>Current Temp: {day.currentTemp}°F</p>
        <div className='temp-wrapper'>
          <p>Hi: {day.hiTemp}°F</p>
          <p>Lo: {day.loTemp}°F</p>
        </div>
        <p>Humidity: {day.humidity}%</p>
        <p>Sun Rise: {day.sunRise}</p>
        <p>Sun Set: {day.sunSet}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>Detailed Weather Information</h1>
      <div className='detailed-weather-container'>
        {weatherArr}
      </div>
    </div>
  );
}
export default DetailedWeather;