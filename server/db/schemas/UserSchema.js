const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//创建Schema
const UserSchema = new Schema({
    name: String,
    password: String,
    email: String
});
module.exports = UserSchema;