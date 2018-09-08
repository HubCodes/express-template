require('dotenv').config();
const should = require('should');
const httpMocks = require('node-mocks-http');
const mainController = require('../main/controller');

const req = httpMocks.createRequest();
const res = httpMocks.createResponse();

describe('main router', () => {
  it('should return status 200', () => {
    mainController(req, res);
    res.statusCode.should.be.equal(200);
  });
});
