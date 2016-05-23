var request = require('supertest');

describe('API endpoints', function() {
  var server;
  beforeEach(function() {
    server = require('./server');
  });
  afterEach(function() {
    server.close();
  });

  it('responds to /customers', function (done) {
    request(server).get('/customers')
    .expect(200, done);
  });

  it('responds to /customer/4', function (done) {
    request(server).get('/customer/4')
    .expect(200, done)
    .expect({
      "id": 4,
      "name": "Augenblix",
      "job": "Häuptling"
    });
  });

  it('does not respond to /customer/42', function (done) {
    request(server).get('/customer/42').expect(404, done);
  });
});
