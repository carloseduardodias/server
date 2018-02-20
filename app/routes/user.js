module.exports = function (app) {
  let ctrl = app.controllers.users;

  app.get('/api/users', ctrl.index);
  app.post('/api/users', ctrl.create);
  app.get('/api/users/:id', ctrl.view);
  app.put('/api/users/:id', ctrl.edit);
  app.delete('/api/users/:id', ctrl.delete);
  app.post('/api/users/login', ctrl.login);
}