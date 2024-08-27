//      2_0-SSR-Static-Files

const express = require('express');
const path = require('path');
const app = express();
const fun = () => {

    //ONLY THE Parent path 
app.use(express.static(path.join(__dirname, '2_0Files/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '2_0Files/public/html-files', 'index.html'));
  });
  
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '2_0Files/public/html-files', 'about.html'));
  });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

};

module.exports = {
    fun
};
