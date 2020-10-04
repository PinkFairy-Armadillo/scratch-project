const express = require('express');
const newsController = require('../controllers/newsController.js');

const router = express.Router();
app.get('/:category/:coordinates', businessesController.getBusinessData, (req, res) => {
  // TODO: object inside json() needs to be constructed from the properties stored in res.locals
  res.send(200).json({});
});


