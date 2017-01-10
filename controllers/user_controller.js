const User = new require('../models/user');

module.exports = {

  create(req, res, next) {
    console.log(req);
    const user = new User({ name: req.body.name });
    user.save()
      .then((savedUser) => res.send(savedUser))
      .catch(next);
  }

};
