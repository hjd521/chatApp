const ws = require('nodejs-websocket');
let {insert} = require('./service/ws.js')
let clientCount = 0;
let connetions = [];
function broad(obj) {
  server.connections.forEach((connect) => {
    console.log(obj, connect.wsId)
    if(connect.wsId === obj.to || connect.wsId === obj.from) {
      connect.sendText(JSON.stringify(obj))
    }
  })
}
let server = ws.createServer((con) => {
  clientCount ++ 
}).listen(3000)
server.on('connection', (instance) => {
  let path = instance.path
  let id = path.substring(5)
  console.log(path, id)
  instance.wsId = id// 设置用户id为socket链接id。
  instance.on('text', async (str) => {
    let data = JSON.parse(str)
    let result = await insert(data)
    broad(result)
  })
  instance.on('error', (err) => {
    console.log('websocket发生错误', err)
  })
  instance.on('close', () => {
    console.log('close')
  })
})
