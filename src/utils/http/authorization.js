const wxAPi = require('../wx_api');
const serviceUtils = require('../service_utils');
import {post} from './api.js'

export function authorization() {
     wxAPi.checkSession().then((res) => {
       let rdsession =  wx.getStorageSync('rdsession');
        console.log(rdsession);
        if (rdsession) {
          checkRdSessionState().then((res)=>{
            if(res){
              console.log('没过期');
              let userinfo = wxAPi.getStorageSync('userinfo');
              if(!userinfo){
                wxAPi.redirectTo('../../pages/login/main');
              }else{
                wxAPi.switchTab('../../pages/index/main')
              }
            }else{
              console.log('过期');
              wxLogin()
            }
          });
        } else {
            console.log('无rdsession');
             wxLogin()
        }

    })
        .catch((res) => {
            console.log(res+'code 过期');
            wxLogin()
        })
}

// 检测RdSession是否过期
async function checkRdSessionState() {
  return new Promise(function (resolve, reject) {
    let url = serviceUtils.getRequestUrl('checkRdSession');
    post(url, obj).then(
      function (res) {
        resolve(res)
      }
    )
  })
}

/**
 * 微信登录
 */
 function wxLogin() {
  wxAPi.login().then((res)=>{
    console.log(res);
    let code = res.code;
    wxAuthorization(code).then((data)=>{
      wxAPi.redirectTo('../../pages/authorization');
    })
  });
}
/**
 * 微信授权
 */
function wxAuthorization(code) {
  return new Promise(function (resolve,reject) {
    let url = serviceUtils.getRequestUrl('getSession');
    let data = {
      code:code
    };
    post(url,data).then(function (res) {
      console.log(res);
      console.log(res.data.data.rdsession);
      wx.setStorageSync('rdsession',res.data.data.rdsession);
      resolve(res);
    }).catch(function (err) {
      console.log(err);
      reject(err)
    });
  })
}


/**
 * 保存用户信息
 */
export function saveUserInfo(user) {
  return new Promise(function(resolve,reject){
    let url = serviceUtils.getRequestUrl('saveUserInfo');
    let data = {
      avatarUrl:user.avatarUrl,
      city:user.city,
      province:user.province,
      country:user.country,
      nickName:user.nickName,
      gender:user.gender,
      language:user.language
    };
    post(url,data).then(function (res) {
      console.log(res);
      resolve(res)
    }).catch(function (err) {
      console.log(err)
      reject(err);
    });
  })
}


/**
 * 解除微信绑定
 */
export function removeWx() {
  return new Promise((resolve,reject)=> {
    const app = getApp();
    let url = servicesUtils.getRequestUrl('removeBanding');
    let data = {

    };
    post(url,data).then(function (res) {
      wx.removeStorageSync('rdsession');
      wx.removeStorageSync('userinfo');
      resolve(res)
    }).catch(function (err) {
      reject(err);
    });
  })

}

