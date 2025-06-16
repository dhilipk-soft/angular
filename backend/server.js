const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const axios = require('axios');

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Sample route
 app.get('/api/ClientStrive/GetAllRoles',async (req, res) => {
     const response = await fetch('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles');
    const data = await response.json();
    res.json(data);
    
});

// API route example
app.get('/api/ClientStrive/GetAllDestination', async (req, res) => {
    const response = await fetch('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation');
    const data = await response.json();
    res.json(data);
});


//GetAllClients
app.get('/api/ClientStrive/GetAllClients', async(req, res) => {
    const response = await fetch('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients');
    const data = await response.json();
    res.json(data);
   // console.log(data);
})

//AddUpdateClient
app.post('/api/ClientStrive/AddUpdateClient', async (req, res) =>{
    try {
         const clientData = req.body;
        //console.log('Incoming request body:', req.body)
            const response = await axios.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient', clientData);
        
            response.json(data);
        } catch (err) {
            console.error('Fetch error:', err);
            res.status(500).json({
            status: false,
            message: 'Internal server error',
            error: err.message
            });
    } })

//DeleteClient
app.delete('/api/ClientStrive/DeletClientById', async (req, res) => {
    const clientId = req.query.clientId;
    const response = await fetch(`https://freeapi.miniprojectideas.com/api/ClientStrive/DeletClientById?clientId=${clientId}`, {
    method: 'DELETE'
    })

    const data = await response.json();
    res.json(data)
})


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


