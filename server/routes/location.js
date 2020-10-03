// require express package
const express = require('express');
// creater router
const router = express.Router();
// require our controller
const locationsController = require('../controllers/locationsController');

// location route to get location data
router.get('/:location',
  locationsController.getLocationData,
  locationsController.getCountryCode,
  (req, res) => {
    res.status(200).json({ locationData: res.locals });
  });
