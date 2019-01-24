var https = require('https');

exports.sampleRequest = function(req, res) {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (r) => {
    console.log('statusCode:', r.statusCode);
    console.log('headers:', r.headers);
  
    let data = '';

    // A chunk of data has been recieved.
    r.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    r.on('end', () => {
      res.send(JSON.parse(data).explanation);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};