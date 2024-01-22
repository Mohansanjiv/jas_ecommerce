const mongoose = require('mongoose');
const validator = require('validator'); // Import the validator module

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Your Name'],
        maxLength: [30, 'Name cannot exceed 30 characters'],
        minLength: [4, 'Name should be at least 4 characters']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true,
        validate: [validator.isEmail, 'Please Enter a Valid Email'] // Use validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Please Enter Your Password'],
        minLength: [8, 'Password should be at least 8 characters'],
        select: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User; // Fix the typo here
