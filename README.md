# The Complete Node.js Developer Course

This repository is my course notes from the Complete Node.js Developer Course.

### Getting started

You will need the Atom text editor.

### Weather App

For the weather app to work, you need api keys for the DarkSkyApi and the
googleMapsApi so that you can access the required data.

#customApiKeys.js
```
var getApiKeys = (callback) => {
    callback({
      darkSkyApiKey: 'YOUR_API_KEY_GOSE_HERE',
      googleMapsApiKey: 'YOUR_API_KEY_GOSE_HERE'
    });
};

module.exports.getApiKeys = getApiKeys;

```
