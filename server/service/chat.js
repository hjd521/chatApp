const {sql} = require('../database/user.js')
module.exports = {
  getList(user) {
    return new Promise((resolve, reject) => {
      sql.query('select * from `user_seeker`', (err, data) => {
        if (err) {
          console.log(err)
        } else {
          resolve({
            success: true,
            code: 1,
            data: data
            })
        }
      })
    })
  }
}