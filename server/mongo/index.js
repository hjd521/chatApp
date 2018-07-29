/**
 * Created by 侯建东 on 2018/6/20.
 */
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function (err, db) {
  if (!err) {
    console.log('数据库连接成功')
  }
})

var userSchema = new mongoose.Schema({
  user: {type: String, required: true},
  password: {type: String, required: true},
  numSet: {type: Number, required: true},
  identify: {type: String}, // 身份
  img: {type: String}, // 头像
  position: {type: String}, // 位置
  title: {type: String}, // 职位名称
  range: {type: String}, // 范围
  year: {type: String}, //  年限
  req: {type: String} // 要求
})
var chatSchema = new mongoose.Schema({
  chatId: {'type': String, required: true},
  from: {'type': String, required: true},
  to: {'type': String, required: true},
  read: {type: Boolean, default: false},
  content: {type: String, default: ''},
  create: {type: Number, default: new Date().getTime()}
})
var Models = {
  User: mongoose.model('userList', userSchema),
  Chat: mongoose.model('chatInfo', chatSchema)
}

module.exports = Models