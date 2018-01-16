// const yargs = require('yargs');
// const geocode = require('./geocode/geocode')
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   }else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//https://api.darksky.net/forecast/77eb526de98755ec5d1f25b80489e893/39.9396284,-75.18663959999999

//77eb526de98755ec5d1f25b80489e893

//currently.temperature

const request = require('request');

var apiKey = 'YOUR_API_KEY_GOSE_HERE'
var basePath = 'https://api.darksky.net/forecast/'
var lat = '39.9396284'
var lng = '-75.18663959999999'

request({
  url: 'https://api.darksky.net/forecast/77eb526de98755ec5d1f25b80489e893/39.9396284,-75.18663959999999',
  json: true
}, (error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature)
  } else {
    console.log('Unable to fetch weather.')
  }
});
