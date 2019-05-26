const express = require('express');
const jwt = require('jsonwebtoken');
const { body, oneOf, validationResult } = require('express-validator/check');
const User = require('../db/models/UserModel'); // 引入模型
const { MD5_SUFFIX, md5, secretKey } = require('../constant/constant');

const router = express.Router();

// 获取用户列表
router.get('/list', (req, res) => {
  User.find({}, (err, data) => {
    if (err) next(err);
    res.json({
      code: 0,
      message: '',
      data
    });
  });
});

// 用户登录接口
router.post(
  '/login',
  [oneOf([body('username').isString(), body('password').isArray()])],
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors, errors.isEmpty(), errors.array());
    const tokenObj = {
      username: req.body.username
    };
    User.findOne(
      {
        username: req.body.username
      },
      (err, user) => {
        if (err) {
          res.send('server or db error');
        } else {
          User.findOne(
            {
              //判断密码是否正确
              username: req.body.username,
              password: md5(req.body.password + MD5_SUFFIX)
            },
            (err, user) => {
              if (user !== null) {
                // 用户登录成功过后生成token返给前端
                let token = jwt.sign(tokenObj, secretKey, {
                  expiresIn: 60 // 授权时效24小时
                });
                res.json({
                  code: 0,
                  message: 'success',
                  data: {
                    success: true,
                    token: token
                  }
                });
              } else {
                res.json({
                  code: 404,
                  message: 'User not found',
                  data: {
                    success: false
                  }
                });
              }
            }
          );
        }
      }
    );
  }
);

// 用户注册接口
router.post(
  '/register',
  [
    body('username').isLength({ min: 6 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors, errors.isEmpty(), errors.array());
    if (!errors.isEmpty()) {
      return res.status(422).json({
        code: 422,
        message: '字段名称不合法',
        data: {
          success: false,
          error: errors.array()
        }
      });
    }
    User.findOne(
      {
        //查找是否存在
        username: req.body.username
      },
      (err, user) => {
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
                  code: 500,
                  messsge: '用户注册失败',
                  data: {
                    success: false
                  }
                });
              } else {
                console.log(doc);
                res.json({
                  code: 0,
                  message: '用户注册成功',
                  data: { success: true }
                });
              }
            });
          } else {
            res.json({
              code: 423,
              messsge: '用户名已存在',
              data: {
                success: false
              }
            });
          }
        }
      }
    );
  }
);

module.exports = router;
