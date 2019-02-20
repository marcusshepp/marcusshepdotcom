module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  // Create a new user
  app.post('/users', users.create);

  // validate a users credentials
  app.post('/users/valid', users.validate);

  // retrieve all users
  app.get('/users', users.findAll);

  // retrieve a single user with userId
  app.get('/users/:userId', users.findOne);

  // update a user with userId
  app.put('/users/:userId', users.update);

  // delete a user with userId
  app.delete('/users/:userId', users.delete);
}
