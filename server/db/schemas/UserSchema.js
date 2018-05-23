const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//创建Schema
const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    role: Number
});
module.exports = UserSchema;