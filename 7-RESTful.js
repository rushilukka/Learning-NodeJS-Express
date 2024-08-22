const express = require('express');
const app = express();

let items = [];

app.use(express.json());

// Create
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read
app.get('/items', (req, res) => {
    res.send(items);
});

// Update
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    items = items.map(item => item.id === id ? updatedItem : item);
    res.send(updatedItem);
});

// Delete
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    items = items.filter(item => item.id !== id);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
