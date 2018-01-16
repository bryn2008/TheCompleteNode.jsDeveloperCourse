const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var apiKey = 'API_KEY_GOES_HERE'
var basePath = 'https://maps.googleapis.com/maps/api/geocode/json'

request({
  url: `${basePath}?address=${encodedAddress}&key=${apiKey}`,
  json: true
}, (error, response, body) => {
  console.log('Begining Check....');
  console.log(body);
  if (error){
    consol.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address.');
  } else if(body.status === '200'){
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Lat: ${body.results[0].geometry.location.lat}`);
      console.log(`Lon: ${body.results[0].geometry.location.lng}`);
  }
  console.log('Finished Checking for address');
})
