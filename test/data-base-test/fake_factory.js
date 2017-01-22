/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const User = new require('../../models/user');
const Activity = new require('../../models/activity');

module.exports = {

  user() {
    const date = new Date("March 28, 1987 11:13:00");
    return new User({
      name: 'Alex',
      dateOfBirth: date,
      country: 'United States',
    });
  },

  activity() {
    const netflix = new Activity({
      name: 'Netflix',
      type: 0,
      days: [0],
      notifications: true
    });
    return netflix;
  }

};