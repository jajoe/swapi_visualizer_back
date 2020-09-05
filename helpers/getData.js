const axios = require('axios');
const swapiURI = require('../config/index').swapiURI;

// Get From the SWAPI the data for a given type and a given text
async function getDataFromTypeAndText(type, expectedText) {
  return axios.get(`${swapiURI}/${type}/?search=${expectedText}`);
}

module.exports = {
  getDataFromTypeAndText: getDataFromTypeAndText,
};
