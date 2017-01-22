const UserController = require('../controllers/user_controller');

module.exports = (app) => {

  app.post('/api/users', UserController.create);

  app.put('/api/users/:id', UserController.update);

};

