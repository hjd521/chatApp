let service_home = require('../service/home.js')
module.exports = {
  // 注册
  reg: async(ctx, next) => {
    const query = ctx.request.body
    const res = ctx.response
    console.log(query, '接收到前端发送的')
    let body = await service_home.reg(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  },
  // 登录
  login: async(ctx, next) => {
    const query = ctx.request.body
    let res = ctx.response
    let body = await service_home.login(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  },
  // 信息补充
  replenish: async(ctx, next) => {
    const query = ctx.request.body
    let res = ctx.response
    let body = await service_home.replenish(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  },
  // 获取用户可选头像
  getHeadImg: async(ctx, next) => {
    const res = ctx.response
    let body = await service_home.getHeadImg();
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  }
}