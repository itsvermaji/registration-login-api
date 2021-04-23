const express = require('express');
// const bodyParser = require('body-parser');

// express app
const app = express();

// Database connection
require('./db.config');



app.use(express.json());

  

app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/registration'));


app.listen(3000, () => {
    console.log(`App is running successfully!`);
})