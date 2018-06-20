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
  res.status(200).json({ name: 'hjd' })
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
    mongo.User.find({name:req.body.user},function(err,doc) {
      if(err) {
        console.log(err)
      } else {
        if (doc && doc.length !== 0) {
            res.status(200).json({text: '账号重复',code: 2})
            return
        } else {
          mongo.User.create({user:req.body.user,password:req.body.password},function(err,doc){
            if(err) {
              console.log(err)
            } else {
              console.log('插入成功')
              res.status(200).json({text: 'success'})
            }
          })
        }
      }
    })

  }
})
module.exports = router;