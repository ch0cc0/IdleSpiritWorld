const pool = require('../db/database.js');

const bcrypt = require('bcrypt');

const hash = (password, saltRounds) => {
    return bcrypt.hash(password, saltRounds);
};

const compare_password = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};


const checkIfAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('Authenticated')
        console.log(req.session)
        return next();
    }

    else {
        // If user is not authenticated, return a 401 Unauthorized status
        const err = new Error('Unauthorized');
        err.status = 401;
        return next(err);
    }
    
};

const checkIfNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }

    next(); 
};

const getUserByUsername = async (username) => {
    try {
        const res = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (res.rows.length > 0) {
            return res.rows[0];
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
    }
  };
  
const getUserById = async (id) => {
    try {
        const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        if (res.rows.length > 0) {
            return res.rows[0];
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    hash,
    compare_password,
    checkIfAuthenticated,
    checkIfNotAuthenticated,
    getUserByUsername,
    getUserById,
};