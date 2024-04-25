require('dotenv').config();
const express = require('express');
const router = express.Router();

const { signup } = require('../../controllers/auth.js');
const { checkIfNotAuthenticated, checkIfAuthenticated } = require('../../utils/helper_funcs.js');

module.exports = (app, passport) => {

    app.use('/auth', router);

    router.post('/signup', checkIfNotAuthenticated, signup);

    router.post('/login', checkIfNotAuthenticated, passport.authenticate('local'), (req, res) => {
        req.session.userId = req.user.id;

        console.log(req.session);
        
        delete req.user.password;
        res.status(200).send(req.user);
    });

    router.get('/login', checkIfAuthenticated, (req, res) => {
        console.log(req.user)
        res.status(200).send(req.user);
    });

    router.post('/logout', (req, res) => {
        req.logout(function(err) {
            if (err) { return next(err); }
          });
        res.redirect('/hello');
    });
};