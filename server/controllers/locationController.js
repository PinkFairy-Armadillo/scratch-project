const fetch = require('node-fetch');

const locationController = {};

const LOCATION_URI_BASE = 'https://maps.googleapis.com/maps/api/geocode/maps/api/geocode/json?';
const API_KEY = 'AIzaSyAXmU2z5P3g8-J8zYFcUbXghEQuEgAssZM';

const getCountryName = (addressComponents) => {

};

// get information from google maps api
locationController.getLocationData = (req, res, next) => {
  const { location } = res.params;

  // TODO: handle possible parsing of params in case of spaces in location 'los angeles' 

  fetch(`${LOCATION_URI_BASE}address=${location}&key=${API_KEY}`)
    .then((data) => data.json())
    .then((locationData) => {
      const { address_components, geometry } = locationData.results[0];
      const { lat, lng } = geometry.location;
      res.locals.latitude = lat;
      res.locals.longitude = lng;
      res.locals.addressComponenets = address_components;

      console.log(`latitude: ${lat}, longitude: ${lng}, address_components: ${address_components}`);
      return next();
    })
    .catch((error) => next({ log: `Error in locationController.getLocationData; ERROR: ${error}` }));
};

// 
locationController.getCountryCode = async (req, res, next) => {
  try {
    // iterate through res.locals.addressComponenets
    for (let i = 0; i < res.locals.addressComponenets.length; i += 1) {
      const obj = res.locals.addressComponenets[i];
      /* if the object types key contains value of "country",
      store lowercase version of "short_name" key's value */
      if (obj.types.contains('country')) {
        res.locals.countryCode = obj.short_name;
        return next();
      }
    }
    res.locals.countryCode = null;
    return next();
  } catch (error) {
    return next({ log: `Error in locationController.getLocationData; ERROR: ${error}` });
  }
};

module.exports = locationController;
