let {sql} = require('../database/user.js')
module.exports = {
  insert: (result) => {
    result.time = String(new Date().getTime)
    return new Promise((resolve, reject) => {
      sql.query(`insert into message set?`,result, function(err, data) {
        if (err) {
          resolve(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}