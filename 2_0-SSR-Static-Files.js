//      2_0-SSR-Static-Files

const express = require('express');
const path = require('path');
const app = express();
const fun = () => {
app.use(express.static(path.join(__dirname, '2Files/public/html-files')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

};

module.exports = {
    fun
};
