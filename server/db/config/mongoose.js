// 用于连接数据库并且定义Schema和Model
const mongoose = require('mongoose');
const config = require('./config');
module.exports = ()=>{
    mongoose.connect(config.mongodb);//连接mongodb数据库
    // 实例化连接对象
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, '连接错误：'));
    db.once('open', (callback) => {
        console.log('MongoDB连接成功！！');
    });
    return db;
}