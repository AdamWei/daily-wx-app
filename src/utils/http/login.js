const servicesUtils = require('../../utils/service_utils.js')
import {post} from './api.js'
/**
 * 登录
 */
export function login(username, password) {
  return new Promise((resolve,reject)=>{
    const app = getApp();
    let datalist = {
      username: username,
      password: password
    }
    let url = servicesUtils.getRequestUrl('login');
    post(url,datalist).then(function (res) {
      console.log(res);
      resolve(res);
      wx.setStorageSync(res);
    }).catch(function (err) {
      reject(err);
    });
  })
}

/**
 * 登出
 */
export function logout() {
  return new Promise((resolve,reject)=> {
    const app = getApp();
    let url = servicesUtils.getRequestUrl('logout');
    post(url).then(function (res) {
      wx.removeStorageSync('userinfo');
      resolve(res)
    }).catch(function (err) {
      reject(err);
    });
  })

}




