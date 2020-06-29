/**
 * Created by 侯建东 on 2018/5/19.
 */
const koa = require('koa');
const app = new koa();
const router = require('./router/index.js')
const bodyParser = require('koa-bodyparser');
require('./ws.js');
// 设置options请求接收以及跨域的处理方案。
app.use(bodyParser());
app.use(router.allowedMethods());
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
app.use(router.routes());
app.on('error', err => {
  console.log('server error', err);
})
app.listen(9000, () => {
  console.log('server is running http://localhost:9000')
});