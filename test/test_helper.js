const mongoose = require('mongoose');

before(done => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', err => {
      console.warn('Warning', err);
    });
});

beforeEach((done) => {
  const { users } = mongoose.connection.collections;
  users.drop(() => {
    done();
  });
});
