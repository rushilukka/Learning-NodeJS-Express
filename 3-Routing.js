const express = require('express');
const app = express();
const router = express.Router();

const users = {
    123: { id: 123, name: 'Product 123', description: 'Description for Product 123', price: 19.99 },
    124: { id: 124, name: 'Product 124', description: 'Description for Product 124', price: 29.99 },
    // ... other products
};

const fun = () => {
    
    app.get('/', (req, res) => {
        res.send(`<h1>Home Page
            <br>     <br>     <br>
            <a href="http://localhost:3000/sameUrl/123">For SameUrl Multi Methods</a>
            <br>       <br>       <br>
            <a href="http://localhost:3000/api">Actual Routing</a>
            
            </h1>
            `
        );
    });

    // Direct Route - ONLY for Different HTTP Methods
    //   /sameUrl differet types of request
    app.route("/sameUrl/:id")
    .get((req, res) => {
            const id = Number(req.params.id);
            const user = users[id]; // Access the user directly by ID
            if (user) {
                return res.json(user);
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        })
        .put((req, res) => {
            // Implement PUT logic here
        })
        .delete((req, res) => {
            // Implement DELETE logic here
        });
        
        
        // Actual Use of ROUTING
        //pass url -  /api/_______
        app.use('/api',router);
        router.get('/',(req,res)=>{ //***req res
            res.send(`<h1>api router says HELLO!! 
                <br>
                <br>
                <a href="http://localhost:3000/api/users">To users</a>
                </h1>
                `);
        });
        router.get('/users',(req,res)=>{//*** req res
            res.send("<h1>api router directs to users</h1>");
        });
    

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });

};

module.exports = {
    fun
};
