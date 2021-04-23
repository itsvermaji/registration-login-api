import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true;
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema);