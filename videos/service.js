var https = require('https');

exports.sampleRequest = function (req, res) {
  const pageNumber = 1;
  https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${pageNumber}`, response => {
    response.on('data', movies => {
      const result = JSON.parse(movies)
      const data = result.data
      const parallelPromises = []
      for (let i = 2; i <= result.total_pages; i++) {
        https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i}`, res => {
          res.on('data', movie => {
            const aux = JSON.parse(movie)
            aux.data.forEach(currValue => data.push(currValue))
            data.sort((a, b) => a.Year - b.Year);
            const reversed = data.reverse().slice(0, 10)
            reversed.forEach(currTitle => console.log(currTitle.Title))
          })
        })
      }
    })
  }).on('error', error => console.log(error))
};