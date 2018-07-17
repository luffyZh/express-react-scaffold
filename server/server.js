const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('./db/config/mongoose');// 连接mongodb数据库
const router = require('./routes/index.js');

const app = express();
const db = mongoose();
// 加载日志的中间件
// 每一次服务请求都会将信息打印在控制台中
app.use(logger('dev'));
// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 所有的路由会加上“／api”前缀
app.use('/api', router); //添加router中间件

// express 自动帮我们创建一个server，封装的node底层http
app.listen(3003, () => {
  console.log('node server is listening 3003');
});