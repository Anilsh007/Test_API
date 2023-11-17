const login = require('./json/login.json');
const allpatient = require('./json/allpatient.json');
const cardiology = require('./json/cardiology.json');
const userDetails = require('./json/userDetails.json');
const testJson = require('./json/testJson.json');

function getRoutes() {
  return {
    "/api/v1/test": "/test",
    "/api/v1/test/:id": "/test/:id",
    "/api/v1/test/urls\\?id=:id": "/test\?id=:_id"
    // Add new paths here - note that there must be a '/' at the beginning of the key and value, the value should go no further than a second level
  };
}

function getRouteObjects() {
  return {
    login,
    allpatient,
    cardiology,
    userDetails,
    testJson
  };
}

module.exports = { getRoutes, getRouteObjects }
