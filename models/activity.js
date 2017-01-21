/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const mongoose = require('mongoose');
const ActivityType = require('./activity_type');

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    validate: {
      validator: (type) => ActivityType.isValid(type),
      message: 'Activity type is invalid. Must be Routine or Goal'
    },
    required: true
  },
  days: {
    type: [Number],
    required: true
  },
  notifications: {
    type: Boolean,
    required: false
  }
});

const Activity = mongoose.model('activity', ActivitySchema);

module.exports = Activity;
