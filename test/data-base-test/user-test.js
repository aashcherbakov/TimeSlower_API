/**
 * Created by a_shcherbakov on 1/9/17.
 */
const assert = require('assert');
const User = new require('../../models/user');

describe('Creating user', function () {

  function fakeUserAlex() {
    const date = new Date("March 28, 1987 11:13:00");
    return new User({
      name: 'Alex',
      dateOfBirth: date,
      country: 'USA'
    });
  }

  it('should save user name as string', function (done) {
    const alex = fakeUserAlex();

    alex.save()
      .then(() => {
        User.findById(alex._id)
          .then((user) => {
            assert(user.name === 'Alex');
            assert(user.dateOfBirth.getDate() === 28);
            assert(user.dateOfBirth.getMonth() === 2);
            assert(user.dateOfBirth.getFullYear() === 1987);
            done();
          });
      });
  });

  it('should calculate user max age', function() {
    const alex = fakeUserAlex();
    assert(alex.maxAge === 77);
  });

  it('should calculate current age for user', function () {
    const alex = fakeUserAlex();
    assert(alex.age >= 29);
  });

});