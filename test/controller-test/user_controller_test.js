/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const assert = require('assert');
const request = require('supertest');
const User = new require('../../models/user');
const FakeFactory = require('../data-base-test/fake_factory');
const app = require('../../app');

describe('User controller', function () {
  const alex = FakeFactory.user();
  it('POST /api/user should create User instance', function (done) {
    request(app)
      .post('/api/users')
      .send({
        name: alex.name,
        dateOfBirth: alex.dateOfBirth,
        country: alex.country
      })
      .end((err, response) => {
        User.findOne({ name: alex.name })
          .then(newUser => {
            assert(newUser.name === alex.name);
            assert(newUser.country === alex.country);
            assert(newUser.maxAge == 78.88); // unspecified 
            done();
          });
      });
    });
});