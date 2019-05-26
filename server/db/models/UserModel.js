const mongoose = require('mongoose');
const UserSchema = require('../schemas/UserSchema');
//创建model，这个地方的user对应mongodb数据库中users的conllection。
const User = mongoose.model('user', UserSchema);
module.exports = User;
