/**
 * Created by 侯建东 on 2018/6/20.
 */
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(err,db){
  if(!err) {
    console.log('数据库连接成功')
  }
})

var userSchema = new mongoose.Schema({
  user:{type:String,required:true},
  password: {type:String,required:true}
})
var Models = {
  User: mongoose.model('userList', userSchema),
}

module.exports = Models