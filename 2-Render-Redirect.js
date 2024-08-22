//     2-Render-Redirect


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const fun = () =>{
  
// Middleware to serve static files
//ONLY Give Folder Name 
app.use(express.static(path.join(__dirname, '2Files/public')));
 
//file dir will not work ****************
//app.use(express.static(path.join(__dirname, '2Files/public/style.css')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '2Files/public/html-files', 'index.html'));
});

// Route for about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '2Files/public/html-files', 'about.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


}
module.exports={
fun
} 
 