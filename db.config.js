const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-app', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB successfully connected!');
})
.catch(err => {
    console.log('Internal error occured! in Database!');
})