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
  
  const convertKtoF = (K) => Math.round((((K - 273.15) * 9) / 5) + 32);

  const dayOfWeek = (dayNum) => {
    switch (dayNum) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      default: return 'Invalid input';
    }
  }

  const createWeatherBoxes = (data) => {
    const dayNum = new Date().getDay();
    return data.map((day, i) => {
      return (
        <div key={`dd${i}`} className='weather-wrapper'>
          <strong><center>{dayOfWeek(dayNum)}</center></strong>
          <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
          <div className='temp-wrapper'>
            <p>{convertKtoF(day.main.temp_max)}°F</p>
            <p>{convertKtoF(day.main.temp_min)}°F</p>
          </div>
        </div>
      )
    })
  }


  useEffect(() => {
    if (!fetchedData) fetchData();
  },[]);

  if (fetchedData) {
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

/*TODO:
  get more days for weather
  fix search
  link up redux
  more info weather
*/