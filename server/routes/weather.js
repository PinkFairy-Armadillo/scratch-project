const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

// location route to get location data
router.get('/',
  weatherController.getWeather,
  (req, res) => {
    res.status(200).json(res.locals);
  });

module.exports = router;
