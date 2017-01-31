/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const assert = require('assert');
const User = require('../../models/user');
const FakeFactory = require('./fake_factory');

describe('User-Activity associations', () => {
  let alex;
  let netflix;

  beforeEach((done) => {
    alex = FakeFactory.user();
    netflix = FakeFactory.activity();

    alex.activities.push(netflix);

    Promise.all([alex.save(), netflix.save()])
      .then(() => done());
  });

  it('should create associations between user and activity', (done) => {
    User.findOne({ name: alex.name })
      .populate('activities')
      .then(user => {
        assert(user.name === 'Alex');
        assert(user.activities[0].name === 'Netflix');
        done();
      });
  });
});
