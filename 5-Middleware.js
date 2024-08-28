const express = require('express');
const app = express();


const fun = () =>{
  
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}

// Apply authentication middleware to /admin routes
app.use('/admin', isAuthenticated);

app.get('/admin/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

app.get('/admin/settings', (req, res) => {
    res.send('Admin Settings');
});

//---------------------------------------------------------------
// Middleware function
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app. use((req, res, next) => {
    console. log ("Hello from middleware 1");
    req.myUserName = "RNLukka.dev";
    next () ;
    });
    
    app. use((req, res, next) => {
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
