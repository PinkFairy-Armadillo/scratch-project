const fetch = require('node-fetch');

const businessesController = {};

businessesController.getBusinessData = (req, res, next) => {
  const { category, coordinates } = req.params;
  /* example of what the coordinates should look like:
   *
   * "50.334109734_-100.4728934"
   *
   * the regex pattern below will recognize that
   * the underscore separates the latitude(lat) and longitude(lon)
  */
  const lat = coordinates.match(/^[\d.-]+/)[0];
  const lon = coordinates.match(/[\d.-]+$/)[0];
  const limit = 5; // we can make this dynamic later

  fetch(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longituge=${lon}&categories=${category}&limit=${limit}`)
    .then((data) => (data.json()))
    .then((businessData) => {
      console.log(businessData);
      // TODO: extract only the relevant data from businessData
      // TODO: save that information into our res.locals
      return next();
    })
    .catch((err) => next(err));
};

module.exports = businessesController;
