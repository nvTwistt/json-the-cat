const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  console.log('This is the breed: ',breedName);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error === null) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    } else {
      callback(error, null);
    }
  });
};
module.exports = {fetchBreedDescription};