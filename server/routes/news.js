const express = require('express');
const newsController = require('../controllers/newsController.js');

const router = express.Router();

// location route to get location data
router.get('/:countrycode',
  newsController.getNews,
  (req, res) => {
    res.status(200).json(res.locals);
  });

module.exports = router;
