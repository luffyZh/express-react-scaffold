var express = require('express');
var User = require('../db/models/UserModel');// 引入模型

var router = express.Router();

router.get('/list', (req, res) => {
  User.find({}, (err, data) => {
    if (err) 
      next(err);
    res.json(data);
  });
});

router.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({ //查找一条
        username: req.body.username,
        password: req.body.password
    },(err, doc)=>{
        if (err) {
            res.send('server or db error');
        } else {
            if (doc === null) {
                res.json({ errMsg: '用户名或密码错误' });
            } else {
                console.log(doc);
                res.json({ successMsg: 'login success'});
            }
        }
    })

});

module.exports = router;