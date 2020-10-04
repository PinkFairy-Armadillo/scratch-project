const fetch = require('node-fetch');
require('dotenv').config();

const businessesController = {};

const API_KEY = process.env.BUSINESSES_API_KEY;

businessesController.getBusinesses = (req, res, next) => {
  const { category } = req.params;
  const { lat, lon } = req.query;

  // log error if latitude or longitude are undefined
  if (lat === undefined || lon === undefined) {
    return next({
      log: 'businessController.getBusinesses: ERROR: lat and/or lon are undefined',
      message: { err: 'businessesController.getBusinesses: ERROR: Check server logs for details' },
    });
  }

  const limit = 5; // we can make this dynamic later
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&categories=${category}&limit=${limit}`;

  fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  })
    .then((data) => (data.json()))
    .then(({ businesses }) => {
      res.locals.businesses = businesses;
      return next();
    })
    .catch((err) => next(err));
};

businessesController.getBusinessesByPrice = (req, res, next) => {
  console.log('entering getBusinessesByPrice');
  const { category, priceLevel } = req.params;
  const { lat, lon } = req.query;

  // log error if latitude or longitude are undefined
  if (lat === undefined || lon === undefined) {
    return next({
      log: 'businessController.getBusinesses: ERROR: lat and/or lon are undefined',
      message: { err: 'businessesController.getBusinesses: ERROR: Check server logs for details' },
    });
  }

  // log error if priceLevel is an invalid input
  if (priceLevel < 1 || priceLevel > 4) {
    return next({
      log: 'businessesController.getBusinessesByPrice: ERROR: priceLevel is invalid. priceLevel must be: 1 <= priceLevel <= 4.',
      message: { err: 'businessesController.getBusinessesByPrice: ERROR: Check server logs for details' },
    });
  }

  const limit = 5; // we can make this dynamic later
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&categories=${category}&price=${priceLevel}&limit=${limit}`;

  fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  })
    .then((data) => (data.json()))
    .then(({ businesses }) => {
      console.log(businesses);
      res.locals.businesses = businesses;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = businessesController;
