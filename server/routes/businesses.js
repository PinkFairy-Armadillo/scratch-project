const express = require('express');
const businessesController = require('../controllers/businessesController.js');

const router = express.Router();

router.get('/:category', businessesController.getBusinessData, (req, res) => {
  /* include lat and lon in query string
   * example url where 'restaurants' is the category:
   * http://localhost:3000/businesses/restaurants?lat=40.712775&lon=-74.005973
   */

  const { businesses } = res.locals;
  res.json(businesses);
});

module.exports = router;
