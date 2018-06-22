/**
 * Created by 侯建东 on 2018/6/20.
 */
var mongo = require('../mongo/index.js')
const express = require('express');
const router = express.Router();
var cookie=require('cookie-parser');
// 登录接口
router.post('/login',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.body.user === '' || req.body.user === undefined) {
    res.status(200).json({text: '请输入用户名',code: 1})
  } else if(req.body.password === undefined || req.body.password === '') {
    res.status(200).json({text: '请输入密码',code: 1})
  } else {
    mongo.User.find({user:req.body.user,password:req.body.password},function(err,doc) {
      if(err) {
        console.log(err)
      } else {
        console.log(doc)
        doc.numSet = parseInt(doc[0].numSet) + 1
        if (doc && doc.length !== 0) {
          var isNew =  parseInt(doc.numSet) <= 1 ? true : false
          console.log(isNew)
          res.status(200).json({text: '登陆成功',code: 2,isNew: isNew})
        } else {
          res.status(200).json({text: '账号或者密码错误',code: 3})
        }
      }
    })
  }
})
// 注册接口
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
            password: req.body.password,
            numSet: 0
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
// 完善信息接口
router.post('/perfectId',function(req,res){
  console.log('the user is',req.body.user)
  mongo.User.update({user: req.body.user},{
    identity: req.body.identity,// 身份
    position: req.body.position, // 位置
    title: req.body.pos,
    range: req.body.range,
    year: req.body.year,
    req: req.body.req
  },function(err,doc) {
    if(err) {
      console.log(err)
      res.status(500)
    } else {
      res.status(200).json({code:2,text: 'success'})
    }
  })
})
module.exports = router;