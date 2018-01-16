const request = require('request');
const customApiKeys = require('../customApiKeys');

var getWeather = (lat, lng, callback) => {

  customApiKeys.getApiKeys((keys) => {
    var apiKey = keys.darkSkyApiKey;
    console.log(apiKey);

    var basePath = 'https://api.darksky.net/forecast/'

    request({
      url: `${basePath}${apiKey}/${lat},${lng}`,
      json: true
    }, (error, response, body) => {
      if(!error && response.statusCode === 200){
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback('Unable to fetch weather.');
      }
    });
  });

};

module.exports.getWeather = getWeather;
