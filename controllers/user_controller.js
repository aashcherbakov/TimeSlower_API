const User = new require('../models/user');

module.exports = {

  create(req, res, next) {
    const user = new User(parameters(req.body));
    user.save()
      .then((savedUser) => res.send(savedUser))
      .catch(next);
  },

  update(req, res, next) {
    const userId = req.params.id;
    const userProperties = parameters(req.body);
    User.findByIdAndUpdate({ _id: userId }, userProperties)
      .then(() => User.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
  }

};

function parameters(body) {
  const params = {};

  if (body.name) {
    params.name = body.name;
  }

  if (body.gender) {
    params.gender = body.gender;
  }

  if (body.dateOfBirth) {
    params.dateOfBirth = body.dateOfBirth;
  }

  if (body.country) {
    params.country = body.country;
  }

  return params;
}
