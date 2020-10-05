import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps =({
  informationReducer: { lat, long }  
}) => ({ lat, long });

const WeatherView = props => {
  const [weatherData, setWeatherData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);

  const fetchData = () => {
    console.log('fetching weather');
    fetch(`http://localhost:5000/weather?latitude=${props.lat}&longitude=${props.long}`, {
      method: 'GET',
      headers: {
        "Content-Type": "Application/JSON",
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log([data.weather]);
      setWeatherData([data.weather]);
      setFetchedData(true);
    })
    .catch(err => console.log('Weather fetch ERROR: ', err));
  }
  
  const createWeatherBoxes = (weatherData) => {
    return weatherData.map((day, i) => {
      <div key={`dd${i}`} className='weather-wrapper'>
        <strong><center>{day.dayName}</center></strong>
        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}01d@2x.png`}></img>
        <div className='temp-wrapper'>
          <p>{day.main.temp_max}°F</p>
          <p>{day.main.min}°F</p>
        </div>
      </div>
    })
  }


  useEffect(() => {
    if (!fetchedData) fetchData();
  },[]);

  if (fetchedData) {
    //console.log(data)
    const weatherDivs = createWeatherBoxes(weatherData);
    return (
      <div className='weather-container'>
        {weatherDivs}
        <Link to={'/detailed-weather'}>
          <button>More Info</button>
        </Link>
      </div>
  );
  } else {
    return (
      <div>Fetching weather info</div>
    )
  }
  
}

export default connect(mapStateToProps, null)(WeatherView);