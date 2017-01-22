const mongoose = require('mongoose');
const dateCalculator = require('./date_calculator');
const lifeEstimator = require('./age_estimator');
const Gender = require('./gender');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    dateOfBirth: { type: Date, required: true },
    country: { type: String, required: true },

    // Optional

    name: String,

    gender: {
      type: Number,
      validate: {
        validator: (gender) => Gender.isValid(gender),
        message: 'Gender is not valid'
      },
      required: false
    },

    // Connection to Activity schema
    activities: [{ type: Schema.Types.ObjectId, ref: 'activity' }]
  },
  {
    toObject: { virtuals: true }, toJSON: { virtuals: true }
  }
);

// Computed properties

UserSchema.virtual('maxAge').get(function () {
  return lifeEstimator.maxAgeFor(this.country, this.gender);
});

UserSchema.virtual('age').get(function () {
  return dateCalculator.calculateAge(this.dateOfBirth, new Date());
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
