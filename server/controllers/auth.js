const pool = require('../db/database.js');
const { hash } = require('../utils/helper_funcs.js');

const signup = async (req, res, next) => {
    const { username, password, email } = req.body;
    console.log( username )
    console.log( password )
    console.log( email )
    
    if (!username || !password || !email) {
        const err = new Error('All fields are required');
        err.status = 400;
        return next(err);
    }
    console.log(`Received signup request for username: ${username}, email: ${email}`); // Logging the request

    const hashedPassword = await hash(password, 10);

    console.log('hashed password');

    try {
        const result = await  pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashedPassword, email]);

        console.log('User signed up successfully');
        return res.status(201).json({ message: 'User signed up successfully' });
    
    } catch (err) {
        err.message = 'An error occurred while signing up';
        err.status = 500;
        return next(err);
    }
};

module.exports = {
    signup,
}