/**
 * Created by a_shcherbakov on 1/9/17.
 */
const assert = require('assert');
const User = new require('../../models/user');
const FakeFactory = require('./fake_factory');

describe('Creating user', function () {

  let alex;

  beforeEach(function (done) {
    alex = FakeFactory.fakeUser();
    alex.save()
      .then(() => done());
  });

  it('should save user name as string', function (done) {
    User.findById(alex._id)
      .then((user) => {
        assert(user.name === 'Alex');
        assert(user.dateOfBirth.getDate() === 28);
        assert(user.dateOfBirth.getMonth() === 2);
        assert(user.dateOfBirth.getFullYear() === 1987);
        done();
      });
  });

  it('should calculate user max age', function() {
    alex.gender = 0;
    assert(alex.maxAge == 76.47);
  });

  it('should give average age if gender is not specified', function () {
    assert(alex.maxAge == 78.88);
  });

  it('should calculate current age for user', function () {
    assert(alex.age >= 29);
  });

});