/**
 * Created by 侯建东 on 2018/6/20.
 */
var mongo = require('../mongo/index.js')
const express = require('express');
const router = express.Router();
router.post('/login',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  console.log(req)
  if (!req.body.user || !req.body.password) {
    res.status(200).json({text: '用户名或者密码缺少',code: 1})
  } else {
    mongo.User.find({user:req.body.user,password:req.body.password},function(err,doc) {
      if(err) {
        console.log(err)
      } else {
        if (doc && doc.length !== 0) {
          res.status(200).json({text: '登陆成功',code: 2})
        } else {
          res.status(200).json({text: '无此账户请注册后再进行登录',code: 3})
        }
      }
    })
  }
})
router.get('/data',function(req,res){
  User.find({},function(err,doc){
    res.json(doc);
  })
  // res.json({name: 'hjd',age: 16})
})
router.post('/reg',function(req,res){
  // console.log(req.body)
  if (!req.body.user || !req.body.password) {
    res.status(200).json({text: '参数不全',code: 1})
  } else {
    mongo.User.find({user:req.body.user},function(err,doc) {
      if(err) {
        console.log(err)
      } else {
        if (doc && doc.length !== 0) {
            res.status(200).json({text: '账号重复',code: 2})
            return
        } else {
          var user = new mongo.User({
            user: req.body.user,
            password: req.body.password
          })
          user.save(function(err, result) {
            if(err) {
              console.log(err)
            } else {
              console.log('插入成功',result)
              res.status(200).json({text: 'success',code: 3})
            }
          })
        }
      }
    })
  }
})
module.exports = router;