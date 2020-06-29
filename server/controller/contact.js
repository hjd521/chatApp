const service_chat = require('../service/chat.js')
module.exports = {
  getContacts: async (ctx, next) => {
    const query = ctx.request.body
    const res = ctx.response
    let body = await service_chat.getList(query)
    ctx.response.status = 200;
    ctx.response.body = body;
    await next()
  }
}