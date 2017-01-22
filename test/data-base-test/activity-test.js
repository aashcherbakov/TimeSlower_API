/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const assert = require('assert');
const Activity = new require('../../models/activity');
const FakeFactory = require('./fake_factory');

describe('Creating activity', function () {
  let activity;

  beforeEach(function (done) {
    activity = FakeFactory.activity();
    activity.save()
      .then(() => done());
  });

  it('should create activity', function (done) {
    Activity.findById(activity._id)
      .then(activity => {
        assert(activity.name === 'Netflix');
        done();
    });
  });

  it('should find activity by name', function (done) {
    Activity.find({ name: 'Netflix' })
      .then((activities) => {
        assert(activities[0].name === 'Netflix');
        done();
      });
  });
});