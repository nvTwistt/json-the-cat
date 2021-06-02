let args = process.argv;
let content = args.slice(2);
let breeds = content[0];
let breed = breeds.slice(0,4);
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(Object.keys(body));
  if (Object.keys(body).length <= 2) {
    console.log("The breed was not found, please enter a new breed.");
  }
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});