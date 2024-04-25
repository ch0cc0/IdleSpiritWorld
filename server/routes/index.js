const testRouter = require('./test');

const authRouter = require('./auth');

module.exports = (app, passport) => {
  testRouter(app);

  authRouter(app, passport);
}