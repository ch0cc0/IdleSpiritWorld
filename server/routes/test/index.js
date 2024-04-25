const express = require('express');
const router = express.Router();

module.exports = (app) => {

    app.use('/hello', router);

    router.get('/', (req, res) => {
        console.log('Hello World');
        res.status(200).send('Hello World');
    });

    router.post('/', (req, res) => {
        const { username } = req.body;
        console.log( username )
        
        res.status(200).send('Hello World');
    });

};