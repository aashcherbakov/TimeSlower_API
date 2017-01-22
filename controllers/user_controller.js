const User = new require('../models/user');

module.exports = {

  create(req, res, next) {
    const user = new User({
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      country: req.body.country,
      gender: req.body.gender
    });
    user.save()
      .then((savedUser) => res.send(savedUser))
      .catch(next);
  }

};
