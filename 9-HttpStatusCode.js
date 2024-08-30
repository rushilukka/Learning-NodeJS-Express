//      9-HttpStatusCode

const express = require('express');
const app = express();


const fun = () => {

        //won't work 100
    app.get('/', (req, res) => {
         res.status(100).send('Home Page');
    });
    app.get('/informational', (req, res) => {
          const status = 100;
        res.status(status).send(`Continue ${status}`);
    });

    app.get('/2', (req, res) => {
          const status = 200;
        res.status(status).send(`Success - Everything is OK! ${status}`);
    });

    app.get('/3', (req, res) => {
          
        const status = 301;
        res.redirect(status, `https://chatgpt.com/`);//******only link
    });

    app.get('/4', (req, res) => {
        // 4xx - Client Error: Sending a 404 Not Found status
        const status = 404;
        res.status(status).send(`Client Error - Resource not found! ${status}`);
    });
    
    app.get('/5', (req, res) => {
        // 5xx - Server Error: Sending a 500 Internal Server Error status
        const status = 500;
        res.status(500).send(`Server Error - Something went wrong! ${status}`);
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });




};
module.exports = {
    fun
};
