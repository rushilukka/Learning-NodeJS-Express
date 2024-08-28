//      5_1-AuthenticationURL-General
const express = require('express');
const app = express();

const users = {
    1: { id: 1, username: 'admin_RNL', boolAuthentication: true },
    2: { id: 2, username: 'guest', boolAuthentication: false },
};


//General Middleware
const fun = () =>{
    app.get('/', (req, res) => {
        res.send('<h1>Home Page</h1>');
    });
 
    //Apply authentication middleware to routes that include a user ID
    app.use('/:userId', isAuthenticated);
    // Middleware to check if the user is authenticated based on user ID in URL
    function isAuthenticated(req, res, next) {
        const userId = req.params.userId; // Extract userId from URL
        const user = users[userId];
        if (user && user.boolAuthentication) {
            req.user = user; // Attach user data to the request object
            return next(); // Proceed to the next middleware or route handler
        } else {

            //Except 1 all 
            res.status(401).send('Unauthorized: User is not authenticated');
        }
    }
    // Protected route
    //******** Pass URL -   http://localhost:3000/1
    //******** Pass URL Try -   http://localhost:3000/2
    app.get('/:userId', (req, res) => {
        res.send(`<h1>Hello username  :- ${req.user.username}</h1>`)    
    });

    //ONLY BY - http://localhost:3000/1/dashboard
    app.get('/:userId/dashboard', (req, res) => {
        res.send(`<h1>Home Page Welcome to dashboard :-  ${req.user.username}</h1>`);
    });
    //ONLY BY - http://localhost:3000/1/settings
    app.get('/:userId/settings', (req, res) => {
        res.send(`<h1>Welcome to settings :-${req.user.username}</h1>`);
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


};
module.exports = {
    fun
};
