//      5-Middleware
const express = require('express');
const app = express();

// Dummy user data (In a real app, this would be fetched from a database)
const users = {
    1: { id: 1, username: 'admin123', boolAuthentication: true },
    2: { id: 2, username: 'guest', boolAuthentication: false },
};


const fun = () =>{
  
// Middleware function
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app. use((req, res, next) => {
    console.log ("Hello from middleware 1");
    res.send("Hello from middleware 1fd");
    req.myUserName = "RNLukka.dev";
    next () ;
    });
    
    app.use((req, res, next) => {
        console. log("Hello from middleware 2", req.myUserName);
        next ();
        
    });
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

};

module.exports = {
    fun
};
