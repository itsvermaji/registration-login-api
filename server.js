const express = require('express');
// const bodyParser = require('body-parser');

// express app
const app = express();
// Set Environment Variables
require('dotenv').config()


// Database connection
require('./db.config');


// For parsing req.body object
app.use(express.json());

  
// API routes
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/registration'));

// Port number
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})