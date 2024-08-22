const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.json()); // For parsing JSON data

app.post('/submit-form', (req, res) => {
    res.send(`Form data received: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
