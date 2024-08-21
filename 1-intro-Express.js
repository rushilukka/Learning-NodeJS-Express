//  1-intro-Express

const express = require('express');
const app = express();

const fun = () =>{
  
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({ message: 'Data received successfully' });
  });
  
  app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });


 
}
module.exports={
fun
} 
 