const {fetchBreedDescription} = require('./breedFetch');
let args = process.argv;
let content = args.slice(2);
let breeds = content[0];
let breed = breeds.slice(0,4);
fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Couldn\'t fetch: ', error);
  } else {
    console.log(description);
  }
});
module.exports = {fetchBreedDescription};