const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
