//      5_2-AuthenticationURL-Specific
const express = require('express');
const app = express();


const usersLocal = {
    1: { id: 1, username: 'RNL'},
    2: { id: 2, username: 'NRL'},
};

//Specific URL Middleware
const fun = () =>{
    app.get('/', (req, res) => {
        res.send('<h1>Home Page</h1>');
    });
     // Apply authentication middleware to routes that include a user ID
    app.use('/user/profile/:userId', CheckUser);
    // Middleware to check if the user is authenticated based on user ID in URL
    function CheckUser(req, res, next) {
        const userId = req.params.userId; // Extract userId from URL
        const user = usersLocal[userId];
        if (user) {
            req.user = user; // Attach user data to the request object
            return next(); // Proceed to the next middleware or route handler
        } else {
            res.status(401).send('<h1>No User Found</h1>');
        }
    }
// Only Registered 
    //BY - http://localhost:3000/user/profile/1
    app.get('/user/profile/:userId', (req, res) => {
        res.send(`<h1>Hello username  :- ${req.user.username}</h1>`)    
    });

    //BY - http://localhost:3000/user/profile/1/dashboard
    app.get('/user/profile/:userId/dashboard', (req, res) => {
        res.send(`<h1>Home Page Welcome to dashboard :-  ${req.user.username}</h1>`);
    }); 


//-----------------------------------------------------------------------

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


};
module.exports = {
    fun
};
