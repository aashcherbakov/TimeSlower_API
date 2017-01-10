/**
 * Created by a_shcherbakov on 1/9/17.
 */
const assert = require('assert');
const User = new require('../../models/user');

describe('Creating user', () => {
  it('should save instance to database', (done) => {
    const user = new User({ name: 'Test user' });
    user.save()
      .then(() => {
        assert(!user.isNew);
        done();
      });
  });

  it('should save user name as string', (done) => {
    const alex = new User({ name: 'Alex' });
    alex.save()
      .then(() => {
        User.findById(alex._id)
          .then((user) => {
            assert(user.name === 'Alex');
            done();
          });
      });
  });
});