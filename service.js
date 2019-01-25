var https = require('https');

exports.sampleRequest = function(req, res) {
  return https.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod', (response) => {
    let data = '';

    // A chunk of data has been recieved.
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};