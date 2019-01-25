var https = require('https');

exports.sampleRequest = function(req, res) {
  return https.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);
  
    let data = '';

    // A chunk of data has been recieved.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};