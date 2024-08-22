//      2-RenderPgs.js


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const fun = () =>{
  
// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


}
module.exports={
fun
} 
 