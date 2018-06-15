/**
 * Created by 侯建东 on 2018/5/19.
 */
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
  console.log('数据库连接成功')
})
const User= mongoose.model('user',new mongoose.Schema({
  name:{type:String,required:true},
  age: {type:Number,required:true}
}))
//新增数据
User.create({
  name: 'hl',
  age: 10
},function(err,doc){
  if(err) {
    console.log(err)
  } else {
    console.log(doc)
  }
})
// 解决跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200); //让options请求快速返回
  }
  else {
    next();
  }
});

app.post('/login',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  console.log(req)
  res.status(200).json({ name: 'hjd' })
})
app.get('/data',function(req,res){
  User.find({},function(err,doc){
     res.json(doc);
  })
  // res.json({name: 'hjd',age: 16})
})
app.post('/reg',function(req,res){
  console.log(req.body)
  res.status(200).json({text: 'success'})
})
app.listen(9093,function(){
  console.log('node app start at 9093')
})