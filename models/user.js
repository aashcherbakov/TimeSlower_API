const mongoose = require('mongoose');
const dateCalculator = require('./date_calculator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

UserSchema.virtual('maxAge').get(function() {
  return 77;
});

UserSchema.virtual('age').get(function() {
  return dateCalculator.calculateAge(this.dateOfBirth, new Date());
});


const User = mongoose.model('user', UserSchema);

module.exports = User;
