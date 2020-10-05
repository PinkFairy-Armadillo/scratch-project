const fetch = require('node-fetch');
require('dotenv').config();

const weatherController = {};
const API_KEY = process.env.WEATHER_API_KEY;
const EXCLUSIONS = 'minutely,hourly,alerts';

// get information from google maps api
weatherController.getWeather = async (req, res, next) => {
  const { latitude, longitude } = req.query;

  // log error if latitude or longitude are undefined
  if (latitude === undefined || longitude === undefined) {
    return next({
      log: 'weatherController.getWeather: ERROR: latitude and/or longitude are undefined',
      message: { err: 'weatherController.getWeather: ERROR: Check server logs for details' },
    });
  }

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${EXCLUSIONS}&appid=${API_KEY}`;

  fetch(url)
    .then((data) => data.json())
    .then((weatherData) => {
      res.locals.weather = weatherData;
      return next();
    })
    .catch((error) => next({ log: `Error in weatherController.getWeather; ERROR: ${error}` }));
};

module.exports = weatherController;
