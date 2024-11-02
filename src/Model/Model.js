const {Schema} = require('mongoose');

const user = new Schema({
    name: String,
    age: Number
})

module.exports = {
    user
}