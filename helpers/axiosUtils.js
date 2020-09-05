// Return if there is at least one data in the answer to an Axios request
function hasAtLeastOneData(res) {
  // we can make it cleaner with ES6 or lodash
  return res.data && res.data.count && res.data.count > 0 && res.data.results;
}

// Return if the answer to an Axios request is empty
function isAxiosResultEmpty(res) {
  // we can make it cleaner with ES6 or lodash
  return !(res && res.data && res.data.results);
}

module.exports = {
  hasAtLeastOneData: hasAtLeastOneData,
  isAxiosResultEmpty: isAxiosResultEmpty,
};
