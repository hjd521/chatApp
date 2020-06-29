var {sql} = require('../database/user.js')
const uuid = require('node-uuid')
module.exports = {
  reg: (query) => {
    return new Promise((resolve,reject) => {
      let body = {
        success: true,
        code: -1 
      }
      if (!query.username || !query.password) {
        body.msg = '用户名或者密码缺失'
        resolve(body)
      } else {
        sql.query('select * from `user_seeker` where `phone` = ?' , query.phone, (err, data) => {
          if (err) {
            console.log(err);
            body = {
              msg: '未知错误',
              code: -1
            }
            resolve(body)
          } else {
            if (data.length > 0) {
              body = {
                success: true,
                code: -1,
                msg: '该手机号已经注册过了'
              }
              resolve(body)
            } else {
              let re = `insert into user_seeker set?`
              query.id = uuid.v4()
              sql.query(re,query, (err,data) => {
                if (err) {
                  body.msg = '注册失败，请重试'
                  resolve(body)
                } else {
                  body.code = 1
                  body.msg = '注册成功'
                  resolve(body)
                }
              })
            }
          }
        })
      }
    })
  },
  login: (query) => {
    return new Promise((resolve, reject) => {
      if (!query.user || !query.password) {
        resolve({
          msg: '请输入用户名或者密码',
          code: -1
        })
      } else {
        sql.query('select * from `user_seeker` where username = ? && password = ?', [query.user, query.password], (err, data) => {
          if (err) {
            resolve({
              code: -1,
              msg: '登录失败'
            })
          } else {
            let code = 1
            let msg = '登录成功'
            if (data.length === 1) {
              if(!data[0].identity) {
                code = 2
                msg = '初次登录请求补充信息！'
              }
              resolve({
                msg: msg,
                code: code,
                data: data[0]
              })
              code = null
              msg = null
            }
          }
        })
      }
    })
  },
  replenish: (query) => {
    return new Promise((resolve, reject) => {
      if (!query.id) {
        resolve({
          code: -1,
          msg: '缺少用户id参数',
          success: true
        })
      } else {
        let arr = [
          query.identity,
          query.location,
          query.workLong,
          query.pos,
          query.range,
          query.skill,
          query.id
        ]
        console.log(query.id)
        sql.query('update `user_seeker` set `identity` = ?,`location`=?,`workLong`=?,`pos`=?,`range`=?,`skill`=? where `id` = ?',arr, function(err, data) {
          if (err) {
            console.log('更新数据失败!', err)
            resolve({
              msg: '修改数据失败',
              code: -1
            })
          } else {
            resolve({
              code: 1,
              msg: '完善信息成功',
              success: true
            })
          }
        })
      }
    })
  }
}