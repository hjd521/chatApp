const fs = require('fs')
module.exports = {
  readFileList(path) {
    let result = []
    let files = fs.readdirSync(path);
    files.forEach((item) => {
      console.log(item, '读取服务器上文件的信息')
      result.push({
        filename: 'http://localhost:9000/' + item
      })
    })
    return result
  }
}