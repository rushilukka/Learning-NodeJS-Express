const express = require('express');
const app = express();
 
const fs = require('fs');
app.use(express.json());

//from req.body
// As a single object X not as Array of Object
//     {
//       "name":"Rushi",
//       "class":"TC1",
//       "sem":"755"
//     }
//----------------------------------------------------  

let users = JSON.parse(fs.readFileSync('./7Files/data.json', 'utf8'));

const fun = () => {

    //Create user
        //Auto increment id :-
        //Check if Already exists :-
    app.post("/create", (req, res) => {
        const body = req.body;
        const name = body['name'];
        const i = users.find(user => user.name === name);
        if (i) {
            console.log(i);
            return res.status(404).json({ message: 'User already exists' });
        }
        else{
            console.log(i);
               users.push({ ... body, id: users.length +1 });
            fs.writeFile("./7Files/data.json", JSON.stringify(users), (err, data) => {
              if(err) return res.json({ status: "Error" });
             return res. json({ status: "success", id: users.length});
            });
        }   
    
    }
    );
//----------------------------------------------------  

    //Read all users
    app.get('/read',(req, res) => {
        const usersData = users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          class: user.class,
          sem: user.sem,
        }));
        return res.json(usersData);
      });
      
    // Search users by name
    app.get('/read/:name', (req, res) => {
        // Convert the name to lowercase for case-insensitive search
        const name = req.params.name.toLowerCase(); 
        
        const matchingUsers = users.filter(user => user.name.toLowerCase() === name);

        if (matchingUsers.length > 0) {
            return res.json(matchingUsers);
        } else {
            return res.status(404).json({ message: 'No users found with the given name' });
        }
    });

    
//----------------------------------------------------  

    // Update user by ID
    app.put('/update/:id', (req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex(user => user.id === id);

        if (index !== -1) {
            // Update user data with the request body
            users[index] = { ...users[index], ...req.body };

            // Save the updated users array back to data.json
            fs.writeFileSync('data.json', JSON.stringify(users, null, 2));

            return res.json(users[index]);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    });


//----------------------------------------------------  

    // Delete user by ID
    app.delete('/delete/:id', (req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex(user => user.id === id);

        if (index !== -1) {
            // Remove the user from the array
            const deletedUser = users.splice(index, 1);

            // Save the updated users array back to data.json
            fs.writeFileSync('data.json', JSON.stringify(users, null, 2));

            return res.json({ message: 'User deleted successfully', user: deletedUser });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    });


    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

};
module.exports = {
    fun
};
