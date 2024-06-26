const expressLoader = require('./express');
const passportLoader = require('./passport');
const routeLoader = require('../routes');

module.exports = async (app) => {

    // Load Express middlewares
    const expressApp = await expressLoader(app);
  
    // Load Passport middleware
    const passport = await passportLoader(app);
  
    // Load API route handlers
    await routeLoader(app, passport);

    // Error Handler
    app.use((err, req, res) => {

        const { message, status } = err;

        console.log(err);
    
        return res.status(status).send({ message });
    });
  }