const types = require('../constants/types').types;
const getDataFromTypeAndText = require('../helpers/getData')
  .getDataFromTypeAndText;
const addTypeToItems = require('../helpers/postProcessing').addTypeToItems;
const utils = require('../helpers/axiosUtils');

const EXPIRES_IN_CACHING = 30;

const defaultOptions = {
  cache: {
    expiresIn: EXPIRES_IN_CACHING * 1000,
    privacy: 'private',
  },
};

// Add the route /all/{name} which enables to search a result whatever the type
function addRouteWithoutFilter(server) {
  server.route({
    method: 'GET',
    path: '/all/{name}',
    handler: async (request, h) => {
      const expectedText = request.params.name;
      console.log('GET /all/{name}', expectedText);
      const rawResults = await Promise.all(
        types.map((el) => getDataFromTypeAndText(el, expectedText))
      );
      const filteredResults = rawResults
        .map((resultsForOneType, typeIndex) => {
          return utils.hasAtLeastOneData(resultsForOneType)
            ? addTypeToItems(resultsForOneType.data.results, types[typeIndex])
            : undefined;
        })
        .filter((resultsForOneType) => !!resultsForOneType);
      return filteredResults ? filteredResults.flat() : [];
    },
    options: defaultOptions,
  });
}

// Add the routes for each type (see the constant types for the list)
function addRoutesWithGivenType(server) {
  types.forEach((type) => {
    server.route({
      method: 'GET',
      path: `/${type}/{name}`,
      handler: async (request, h) => {
        const expectedText = request.params.name;
        console.log(`GET /${type}/{name}`, expectedText);
        const result = await getDataFromTypeAndText(type, expectedText);
        return !utils.isAxiosResultEmpty(result)
          ? addTypeToItems(result.data.results, type)
          : [];
      },
      options: defaultOptions,
    });
  });
}

module.exports = {
  addRouteWithoutFilter: addRouteWithoutFilter,
  addRoutesWithGivenType: addRoutesWithGivenType,
};
