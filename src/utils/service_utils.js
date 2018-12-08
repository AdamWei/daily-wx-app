const utils = require('../utils/util.js')
const configs = require('./http/config.js').configs

/**
 * 获取MRYX后端服务器url
 * @param key [后端接口对应标识]
 * @param extras [url后拼接的参数值]
 * @param isExitQs [是否存在请求参数]
 * @param dataList [参数list]
 * @returns {string} [最终请求url]
 */
export function getRequestUrl(key, extras = '', isExitQs = 1, dataList = {}, isMps = false) {
  let qs = ""
  const app = getApp()
  if (isExitQs) {
    let model = encodeURIComponent(wx.getSystemInfoSync().model)
    utils.logi('------------------------', model.model)
    qs = qs + "?device_id=&env=weixin_app&platform=weixin_app&uuid=&version=3.8.0.3&model=" + model
    for (let key in dataList) {
      qs = qs + '&' + key + '=' + dataList[key]
    }
  }
  // const fromSource = app.globalData.fromSource
  // if (fromSource && fromSource != '' && fromSource != null && qs != '') {
  //     qs += "&fromSource=" + fromSource
  // }

  const url = (utils.DEV_ENV ? configs.testhost : configs.host) + configs.paths[key] + extras + qs
  utils.logi('url=', url)
  return url
}

//对参数进行加密，返回时间戳以及加密后的字串
export function mix(params) {
  let timeStr = new Date().getTime();

  timeStr /= 1000;

  timeStr = Math.round(timeStr);

  let newStr = JSON.stringify(params) + timeStr + '55d85b3f4806043f84356de9e510375a';
  let md5Str = md5.hexMD5(newStr);
  let subStr = md5Str.substr(11, 16);

  return {
    time: timeStr,
    sign: subStr
  }
}



