/**
 * Created by 侯建东 on 2018/6/20.
 */
const Router = require('koa-router');
const router = new Router();
var cookie = require('cookie-parser');
const { connect } = require('socket.io-client');
const { values } = require('lodash');
// controller
const home = require('../controller/home.js')
const chat = require('../controller/contact.js')
// 注册接口
router.post('/reg', home.reg)
router.post('/login', home.login)
router.get('/getContact', chat.getContacts)
router.put('/user/:id', home.replenish)
// 登录逻辑
module.exports = router;