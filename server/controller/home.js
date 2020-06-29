let service_home = require('../service/home.js')
module.exports = {
  reg: async(ctx, next) => {
    const query = ctx.request.body
    const res = ctx.response
    let body = await service_home.reg(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  },
  login: async(ctx, next) => {
    const query = ctx.request.body
    let res = ctx.response
    let body = await service_home.login(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  },
  replenish: async(ctx, next) => {
    const query = ctx.request.body
    let res = ctx.response
    console.log(query)
    let body = await service_home.replenish(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  }
}