const fetch = require('node-fetch');
require('dotenv').config();

const weatherController = {};
const API_KEY = process.env.WEATHER_API_KEY;

// get information from google maps api
weatherController.getWeather = async (req, res, next) => {
  const { latitude, longitude } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  fetch(url)
    .then((data) => data.json())
    .then((weatherData) => {
      res.locals.weather = weatherData;
      return next();
    })
    .catch((error) => next({ log: `Error in weatherController.getWeather; ERROR: ${error}` }));
};

module.exports = weatherController;
