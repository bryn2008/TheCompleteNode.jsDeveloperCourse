const request = require('request');
const customApiKeys = require('../customApiKeys');

var geocodeAddress = (address, callback) => {

  customApiKeys.getApiKeys((keys) => {
    var apiKey = keys.googleMapsApiKey;
    console.log(apiKey);

    var encodedAddress = encodeURIComponent(address);
    var basePath = 'https://maps.googleapis.com/maps/api/geocode/json'

    request({
      url: `${basePath}?address=${encodedAddress}&key=${apiKey}`,
      json: true
    }, (error, response, body) => {
      if (error){
        callback('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.');
      } else if(body.status === 'OK'){
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });

};

module.exports.geocodeAddress = geocodeAddress;
