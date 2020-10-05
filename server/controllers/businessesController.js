const fetch = require('node-fetch');
require('dotenv').config();

const businessesController = {};

const API_KEY = process.env.BUSINESSES_API_KEY;

businessesController.getBusinessData = (req, res, next) => {
  const { category } = req.params;
  const { lat, lon } = req.query;
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

module.exports = businessesController;
