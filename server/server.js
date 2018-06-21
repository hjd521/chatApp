/**
 * Created by 侯建东 on 2018/5/19.
 */
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
var user = require('./router/user.js'); // 获取用户登录注册相关的接口
const app = express();
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
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
app.use('/', user)
app.listen(9093,function(){
  console.log('node app start at 9093')
})