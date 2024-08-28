//      5-Middleware
const express = require('express');
const app = express();


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
