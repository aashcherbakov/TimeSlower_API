/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const assert = require('assert');
const Activity = new require('../../models/activity');

describe('Creating activity', function () {
  function netflixActivity() {
    const netflix = new Activity({
      name: 'Netflix',
      type: 0,
      days: [0],
      notifications: true
    });
    return netflix;
  }

  it('should create activity', function (done) {
    const netflix = netflixActivity();
    netflix.save()
      .then((activity) => {
        Activity.findById(activity._id)
          .then(activity => {
            assert(activity.name === 'Netflix');
            done();
          });
      });
  });

  it('should find activity by name', function (done) {
    const netflix = netflixActivity();
    netflix.save()
      .then(() => Activity.find({ name: 'Netflix' }))
      .then((activities) => {
        assert(activities[0].name === 'Netflix');
        done();
      });
  });
});