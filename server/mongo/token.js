/**
 * Created by 侯建东 on 2018/6/23.
 */
var jwt = require('jsonwebtoken');
var setToken = function (user,) {
  return jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1h' });
}
module.exports = setToken