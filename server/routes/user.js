const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../db/models/UserModel'); // 引入模型
const {
  MD5_SUFFIX,
  md5,
  secretKey
} = require('../constant/constant');

const router = express.Router();

// 获取用户列表
router.get('/list', (req, res, next) => {
  User.find({}, (err, data) => {
    if (err)
      next(err);
    res.json(data);
  });
});

// 用户登录接口
router.post('/login', (req, res) => {
  const tokenObj = {
    username: req.body.username,
  };
  User.findOne({
    username: req.body.username,
  }, (err, user) => {
    if (err) {
      res.send('server or db error');
    } else {
      User.findOne({ //判断密码是否正确
        username: req.body.username,
        password: md5(req.body.password + MD5_SUFFIX),
      }, (err, user) => {
        if (user !== null) {
          // 用户登录成功过后生成token返给前端
          let token = jwt.sign(tokenObj, secretKey, {
            expiresIn: 60 * 60 * 24 // 授权时效24小时
          });
          res.json({
            success: true,
            message: 'success',
            token: token
          });
        } else {
          res.json({
            success: false,
            message: 'fail'
          });
        }
      });
    }
  });
});

// 用户注册接口
router.post('/register', (req, res) => {
  console.log(req.body);
  User.findOne({ //查找是否存在
    username: req.body.username,
  }, (err, user) => {
    if (err) {
      res.send('server or db error');
    } else {
      if (user === null) {
        const insertObj = {
          username: req.body.username,
          password: md5(req.body.password + MD5_SUFFIX),
          email: req.body.email,
          role: 10.0
        };
        const newUser = new User(insertObj);
        newUser.save(insertObj, (err, doc) => {
          if (err) {
            res.json({
              result: false,
              msg: '用户注册失败'
            });
          } else {
            console.log(doc);
            res.json({
              result: true,
              msg: '用户注册成功'
            });
          }
        });
      } else {
        res.json({
          result: false,
          msg: '用户名已存在'
        });
      }
    }
  });
});

module.exports = router;