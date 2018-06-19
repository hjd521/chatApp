/**
 * Created by 侯建东 on 2018/6/13.
 */
import axios from 'axios'
import { Indicator, Toast } from 'mint-ui';
axios.defaults.baseURL = 'http://10.10.71.208:9093/';
axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'text/plain;charset=UTF-8';
export default function(method, url, params, data) {
  return new Promise((resolve,reject) => {
    Indicator.open()
    axios({
      method,
      url,
      params,
      timeout: 50000,
      data
    }).then((data) => {
      Indicator.close()
      resolve(data)
    }).catch((err) => {
      Toast({
        message: '请求异常，请稍后重试',
        position: 'middle',
        duration: 2000
      });
      reject(err)
    })
  })
}