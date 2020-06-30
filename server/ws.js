const ws = require('nodejs-websocket');
let {insert} = require('./service/ws.js')
let clientCount = 0;
let connetions = [];
function broad(str) {
  server.connections.forEach((connect) => {
    connect.sendText(str)
  })
}
let server = ws.createServer((con) => {
  clientCount ++ 
  con.on('text', async (str) => {
    let data = JSON.parse(str)
    let result = await insert(data)
    broad(JSON.stringify(result))
  })
  con.on('error', (err) => {
    console.log(err)
  })
  con.on('close', () => {
    console.log('close')
  })
}).listen(3000)