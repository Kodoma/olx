const url = require('url');
var https = require('https');

const options = {
    hostname: 'www.googleapis.com',
    port: 443,
    path: '/books/v1/volumes?q=search+terms',
    method: 'GET'
  }

  
exports.sampleRequest = function (req, res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    req = https.request(options, function(res) {
 
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      });
      
      req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
      });
      
      // write data to request body
      req.write('data\n');
      req.write('data\n');
      req.end();
};


