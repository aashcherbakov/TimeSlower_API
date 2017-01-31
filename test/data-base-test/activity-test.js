/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const assert = require('assert');
const Activity = require('../../models/activity');
const FakeFactory = require('./fake_factory');

describe('Creating activity', () => {
  let activity;

  beforeEach((done) => {
    activity = FakeFactory.activity();
    activity.save()
      .then(() => done());
  });

  it('should create activity', (done) => {
    Activity.findById(activity._id)
      .then(retrievedActivity => {
        assert(retrievedActivity.name === 'Netflix');
        done();
    });
  });

  it('should find activity by name', (done) => {
    Activity.find({ name: 'Netflix' })
      .then((activities) => {
        assert(activities[0].name === 'Netflix');
        done();
      });
  });
});
