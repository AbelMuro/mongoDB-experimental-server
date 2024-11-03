const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
})

const User = mongoose.model('user', userSchema, 'users')

module.exports = {
    User
}