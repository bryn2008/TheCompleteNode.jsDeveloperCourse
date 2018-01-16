const request = require('request');

var getWeather = (lat, lng, callback) => {

  var apiKey = 'YOUR_API_KEY_GOSE_HERE'
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
};

module.exports.getWeather = getWeather;
