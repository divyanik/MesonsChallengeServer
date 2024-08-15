const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskRoute =  require('./routes/taskRoute');

require('dotenv').config();

// Convert request to json
app.use(bodyParser.json());

// Replace the connection string with your MongoDB URI
mongoose.connect(process.env.mongo_URL).then(
    () => {
        console.log('Database connected..');
    }
)
.catch((exp) => {
    console.log('Database connection failed!!')
});

// Check for successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB at:', process.env.mongo_URL);
});
 
// Check for connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Use task routes and Start the server
// Give a starting point to the API.
app.use('/', taskRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//


 