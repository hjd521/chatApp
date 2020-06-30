/**
 * Created by 侯建东 on 2018/6/20.
 */
const Router = require('koa-router');
const fs = require('fs')
const router = new Router();
var cookie = require('cookie-parser');
const { connect } = require('socket.io-client');
const { values } = require('lodash');
// controller
const home = require('../controller/home.js')
const chat = require('../controller/contact.js')
// 用户相关接口(注册,登录,获取列表,补全用户信息)
router.post('/reg', home.reg)
router.post('/login', home.login)
router.get('/getContact', chat.getContacts)
router.put('/user/:id', home.replenish)
router.get('/user/head', home.getHeadImg)
// 文件上传接口
router.post('/uploadfile', async (ctx, next) => {
  const file = ctx.request.files.file;
  console.log(file)
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, 'static/') + `${file.name}`;
  const upStream = fs.createWriteStream(filePath);
  reader.pipe(upStream)
  ctx.body = {
    code: 1,
    msg: '上传成功',
    success: true
  }
})
module.exports = router;