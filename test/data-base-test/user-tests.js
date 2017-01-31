/**
 * Created by a_shcherbakov on 1/9/17.
 */
const assert = require('assert');
const User = require('../../models/user');
const FakeFactory = require('./fake_factory');

describe('Creating user', () => {
  let alex;

  beforeEach((done) => {
    alex = FakeFactory.user();
    alex.save()
      .then(() => done());
  });

  it('should save user name as string', (done) => {
    User.findById(alex._id)
      .then((user) => {
        assert(user.name === 'Alex');
        assert(user.dateOfBirth.getDate() === 28);
        assert(user.dateOfBirth.getMonth() === 2);
        assert(user.dateOfBirth.getFullYear() === 1987);
        done();
      });
  });

  it('should calculate user max age', () => {
    alex.gender = 0;
    assert(alex.maxAge == 76.47);
  });

  it('should give average age if gender is not specified', () => {
    assert(alex.maxAge == 78.88);
  });

  it('should calculate current age for user', () => {
    assert(alex.age >= 29);
  });
});
