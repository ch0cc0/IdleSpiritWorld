require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const morgan = require('morgan');

module.exports = (app) => {

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        // secure false for development testing
        cookie: { secure: false, maxAge: 2 * 60 * 60 * 1000 }
    }));
    app.use(flash());

    app.use(morgan('tiny'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(cors({
        origin: ['http://localhost:3000', 'http://192.168.0.120:3000'],
        credentials: true
    }));

    return app;
}