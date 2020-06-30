/**
 * Created by 侯建东 on 2018/5/19.
 */
const koa = require('koa');
const path = require('path')
const app = new koa();
const router = require('./router/index.js');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
require('./ws.js');
// 设置options请求接收以及跨域的处理方案。
app.use(bodyParser());
app.use(router.allowedMethods());
// 解决跨域问题
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});
// // 设置文件上传
// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     maxFileSize: 600*1024*1024
//   }
// }))
// 设置静态文件夹目录
app.use(koaStatic(
  path.join(__dirname, 'static/img')
))
// 设置koa-router
app.use(router.routes());
app.on('error', err => {
  console.log('server error', err);
})
app.listen(9000, () => {
  console.log(app)
  console.log('server is running http://localhost:9000')
});