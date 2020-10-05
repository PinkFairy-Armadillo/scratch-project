const express = require('express');
const businessesController = require('../controllers/businessesController.js');

const router = express.Router();

router.get('/:category', businessesController.getBusinesses, (req, res) => {
  /* include lat and lon in query string
   *
   * example url where 'restaurants' is the category:
   * http://localhost:5000/businesses/restaurants?lat=40.712775&lon=-74.005973
   *
   * server response from the url above should be an array of 5 objects.
   * each object contains information on a restaurant
   *
   * see yelp api documentation for all valid categories
   */

  const { businesses } = res.locals;
  res.status(200).json(businesses);
});

router.get('/:category/:priceLevel', businessesController.getBusinessesByPrice, (req, res) => {
  /* include lat and lon in query string
   *
   * example url where 'restaurants' is the category and '1' is the price level:
   * http://localhost:5000/businesses/restaurants/1?lat=40.712775&lon=-74.005973
   *
   * server response from the url above should be an array of 5 objects.
   * each object contains information on a restaurant whose price range is that of 1
   *
   * valid price levels:
   * 1 = $
   * 2 = $$
   * 3 = $$$
   * 4 = $$$$
   *
   * see yelp api documentation for more details
   */
  const { businesses } = res.locals;
  res.json(businesses);
});

module.exports = router;
