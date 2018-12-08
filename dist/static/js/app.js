global.webpackJsonp([1],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'miniapp-demo',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38d0d480", Component.options)
  } else {
    hotAPI.reload("data-v-38d0d480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var authorization = __webpack_require__(46);
var App = getApp();
/* harmony default export */ __webpack_exports__["a"] = ({
  data: {
    globalData: {
      userInfo: {}
    }
  },
  onLaunch: function onLaunch(options) {
    console.log(options);
  },
  created: function created() {
    //   小程序启动时检测是否授权
    //    authorization.authorization();
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["authorization"] = authorization;
/* harmony export (immutable) */ __webpack_exports__["saveUserInfo"] = saveUserInfo;
/* harmony export (immutable) */ __webpack_exports__["removeWx"] = removeWx;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_js__ = __webpack_require__(92);




// 检测RdSession是否过期
var checkRdSessionState = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              var url = serviceUtils.getRequestUrl('checkRdSession');
              Object(__WEBPACK_IMPORTED_MODULE_3__api_js__["post"])(url, obj).then(function (res) {
                resolve(res);
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function checkRdSessionState() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 微信登录
 */


var wxAPi = __webpack_require__(86);
var serviceUtils = __webpack_require__(87);


function authorization() {
  wxAPi.checkSession().then(function (res) {
    var rdsession = wx.getStorageSync('rdsession');
    console.log(rdsession);
    if (rdsession) {
      checkRdSessionState().then(function (res) {
        if (res) {
          console.log('没过期');
          var userinfo = wxAPi.getStorageSync('userinfo');
          if (!userinfo) {
            wxAPi.redirectTo('../../pages/login/main');
          } else {
            wxAPi.switchTab('../../pages/index/main');
          }
        } else {
          console.log('过期');
          wxLogin();
        }
      });
    } else {
      console.log('无rdsession');
      wxLogin();
    }
  }).catch(function (res) {
    console.log(res + 'code 过期');
    wxLogin();
  });
}function wxLogin() {
  wxAPi.login().then(function (res) {
    console.log(res);
    var code = res.code;
    wxAuthorization(code).then(function (data) {
      wxAPi.redirectTo('../../pages/authorization');
    });
  });
}
/**
 * 微信授权
 */
function wxAuthorization(code) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var url = serviceUtils.getRequestUrl('getSession');
    var data = {
      code: code
    };
    Object(__WEBPACK_IMPORTED_MODULE_3__api_js__["post"])(url, data).then(function (res) {
      console.log(res);
      console.log(res.data.data.rdsession);
      wx.setStorageSync('rdsession', res.data.data.rdsession);
      resolve(res);
    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  });
}

/**
 * 保存用户信息
 */
function saveUserInfo(user) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var url = serviceUtils.getRequestUrl('saveUserInfo');
    var data = {
      avatarUrl: user.avatarUrl,
      city: user.city,
      province: user.province,
      country: user.country,
      nickName: user.nickName,
      gender: user.gender,
      language: user.language
    };
    Object(__WEBPACK_IMPORTED_MODULE_3__api_js__["post"])(url, data).then(function (res) {
      console.log(res);
      resolve(res);
    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  });
}

/**
 * 解除微信绑定
 */
function removeWx() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var app = getApp();
    var url = servicesUtils.getRequestUrl('removeBanding');
    var data = {};
    Object(__WEBPACK_IMPORTED_MODULE_3__api_js__["post"])(url, data).then(function (res) {
      wx.removeStorageSync('rdsession');
      wx.removeStorageSync('userinfo');
      resolve(res);
    }).catch(function (err) {
      reject(err);
    });
  });
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["login"] = login;
/* harmony export (immutable) */ __webpack_exports__["checkSession"] = checkSession;
/* harmony export (immutable) */ __webpack_exports__["getUserInfo"] = getUserInfo;
/* harmony export (immutable) */ __webpack_exports__["setStorageSync"] = setStorageSync;
/* harmony export (immutable) */ __webpack_exports__["getStorageSync"] = getStorageSync;
/* harmony export (immutable) */ __webpack_exports__["navigateTo"] = navigateTo;
/* harmony export (immutable) */ __webpack_exports__["redirectTo"] = redirectTo;
/* harmony export (immutable) */ __webpack_exports__["reLaunch"] = reLaunch;
/* harmony export (immutable) */ __webpack_exports__["switchTab"] = switchTab;
/* harmony export (immutable) */ __webpack_exports__["getLocation"] = getLocation;
/* harmony export (immutable) */ __webpack_exports__["showToast"] = showToast;
/* harmony export (immutable) */ __webpack_exports__["showLoading"] = showLoading;
/* harmony export (immutable) */ __webpack_exports__["hideLoading"] = hideLoading;
/* harmony export (immutable) */ __webpack_exports__["showModal"] = showModal;
/* harmony export (immutable) */ __webpack_exports__["showActionSheet"] = showActionSheet;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

// 获取code
function login() {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.login({ success: resolve, fail: reject });
  });
}
// 校验用户当前session_key是否有效。
function checkSession() {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.checkSession({ success: resolve, fail: reject });
  });
}
// 获取用户信息
function getUserInfo() {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.getUserInfo({ success: resolve, fail: reject });
  });
}

function setStorageSync(key, value) {
  wx.setStorageSync(key, value);
}

function getStorageSync(key) {
  wx.getStorageSync(key);
}

// 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
function navigateTo(url) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.navigateTo({ url: url, success: resolve, fail: reject });
  });
}

// 关闭当前页面，跳转到应用内的某个页面
function redirectTo(url) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.redirectTo({ url: url, success: resolve, fail: reject });
  });
}

// 关闭所有页面，打开到应用内的某个页面。
function reLaunch(url) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.reLaunch({ url: url, success: resolve, fail: reject });
  });
}

// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
function switchTab(url) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.switchTab({ url: url, success: resolve, fail: reject });
  });
}

function getLocation(type) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.getLocation({ type: type, success: resolve, fail: reject });
  });
}

// 显示消息提示框

function showToast() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '成功';
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  });
}

// 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框

function showLoading() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';

  wx.showLoading({
    title: title
  });
}

// 隐藏loading提示框
function hideLoading() {
  wx.hideLoading();
}

function showModal() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '提示';
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "这是一个模态弹窗";

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showModal({
      title: title,
      content: content,
      success: function success(res) {
        resolve(res);
      }
    });
  });
}

function showActionSheet(list) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showActionSheet({
      itemList: list,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(res) {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getRequestUrl"] = getRequestUrl;
/* harmony export (immutable) */ __webpack_exports__["mix"] = mix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

var utils = __webpack_require__(90);
var configs = __webpack_require__(91).configs;

/**
 * 获取MRYX后端服务器url
 * @param key [后端接口对应标识]
 * @param extras [url后拼接的参数值]
 * @param isExitQs [是否存在请求参数]
 * @param dataList [参数list]
 * @returns {string} [最终请求url]
 */
function getRequestUrl(key) {
  var extras = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var isExitQs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var dataList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var isMps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var qs = "";
  var app = getApp();
  if (isExitQs) {
    var model = encodeURIComponent(wx.getSystemInfoSync().model);
    utils.logi('------------------------', model.model);
    qs = qs + "?device_id=&env=weixin_app&platform=weixin_app&uuid=&version=3.8.0.3&model=" + model;
    for (var _key in dataList) {
      qs = qs + '&' + _key + '=' + dataList[_key];
    }
  }
  // const fromSource = app.globalData.fromSource
  // if (fromSource && fromSource != '' && fromSource != null && qs != '') {
  //     qs += "&fromSource=" + fromSource
  // }

  var url = (utils.DEV_ENV ? configs.testhost : configs.host) + configs.paths[key] + extras + qs;
  utils.logi('url=', url);
  return url;
}

//对参数进行加密，返回时间戳以及加密后的字串
function mix(params) {
  var timeStr = new Date().getTime();

  timeStr /= 1000;

  timeStr = Math.round(timeStr);

  var newStr = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(params) + timeStr + '55d85b3f4806043f84356de9e510375a';
  var md5Str = md5.hexMD5(newStr);
  var subStr = md5Str.substr(11, 16);

  return {
    time: timeStr,
    sign: subStr
  };
}

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_MODE", function() { return DEBUG_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEV_ENV", function() { return DEV_ENV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_STACK_MODE", function() { return DEBUG_STACK_MODE; });
/* harmony export (immutable) */ __webpack_exports__["logi"] = logi;
//以下代码需要在上线发布之前修改为false，禁止日志输出
var DEBUG_MODE = true;
//开发环境标识，上线前修改为false，使用正式环境接口
var DEV_ENV = true;
//是否输出插桩方法调用栈
var DEBUG_STACK_MODE = false;

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
//只获取年月日
function formatDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-');
}

//只获取月日
function formatDateNoYear(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [month, day].map(formatNumber).join('-');
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function getRequest(url) {
  var theRequest = new Object();
  var index = url.indexOf("?");
  if (index != -1) {
    var str = url.substr(index + 1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

/**
 * 判断对象是否为空
 * @param Object
 * @returns {boolean}
 */
function gIsEmptyObject(Object) {
  for (var t in Object) {
    return false;
  }
  return true;
}

/**
 * 将对象转为url参数格式
 *
 * @param {any} params {a: 1, b: 2, c: 3}
 * @returns "a=1&b=2&c=3"
 */
function buildQuery(params) {
  var str = '';
  var arr = [];
  if (!params || gIsEmptyObject(params)) {
    return '';
  }
  for (var key in params) {
    arr.push(key + '=' + params[key]);
  }
  return arr.join('&');
}

/**
 * 获取当前日期 格式: 2017-8-18
 *
 * @returns 2017-8-18
 */
function getNowFormatDate() {
  var date = new Date();
  var strDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return strDate;
}

// 十进制颜色
function deciToHex(color, defaultColor) {
  // 指定个非法的值不生效
  if (color && color[0] === '#') {
    return color;
  }
  var c = defaultColor || '';
  color = parseInt(color);
  if (color === undefined || color > 16777215 || color < 0 || color === null) {
    return c;
  }
  c = color.toString(16);
  c = leftZeroPad(c, 6);
  c = '#' + c;
  return c;
}
// 左填充
function leftZeroPad(val, minLength) {
  var MANY_ZEROS = '000000000000000000';
  if (typeof val !== 'string') {
    val = String(val);
  }
  return MANY_ZEROS.substring(0, minLength - val.length) + val;
}

var index = 0;

//同来统计方法调用的时间间隔，用来优化性能
function logTime(arg) {
  index++;

  var app = getApp();
  var current_date = new Date();

  var offsetTime = 0;
  if (app && app.globalData.lastTimeLogFunctionCallTime !== 0) {
    if (app.globalData.startTotalTime == 0) {
      app.globalData.startTotalTime = current_date.getTime();
    }
    offsetTime = current_date.getTime() - app.globalData.lastTimeLogFunctionCallTime;
  }

  var desc = current_date.getMinutes() + "分" + current_date.getSeconds() + '秒' + current_date.getMilliseconds() + "毫秒";

  if (app && app.globalData.startTotalTime != 0) {
    var totalStartTime = new Date(current_date.getTime() - app.globalData.startTotalTime);
    desc += ", 启动总耗时: " + totalStartTime.getMinutes() + "分" + totalStartTime.getSeconds() + "秒" + totalStartTime.getMilliseconds() + "毫秒";
  }
  if (offsetTime != 0) {
    var time = new Date(offsetTime);
    desc += ", 与上一次调用的差值为: " + time.getSeconds() + "秒" + time.getMilliseconds() + "毫秒";
    if (DEBUG_STACK_MODE) {
      var currentCallStack = new Error().stack;
      desc += ", 当前的调用栈为: " + currentCallStack;
    }
  }

  logi('TIME_TAG ==> ' + index + (arg ? " " + arg : "") + ' 当前方法的调用时间为: ' + desc);

  if (app) {
    app.globalData.lastTimeLogFunctionCallTime = current_date.getTime();
  }
}

function logi(infoMsg) {
  if (DEBUG_MODE) {
    console.info(infoMsg);
  }
}

function logDebugInfo() {
  if (DEBUG_MODE) {
    var _console;

    (_console = console).debug.apply(_console, arguments);
  }
}

function loge(error) {
  if (DEBUG_MODE) {
    console.error(error);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  formatTime: formatTime,
  formatDate: formatDate,
  gIsEmptyObject: gIsEmptyObject,
  getRequest: getRequest,
  buildQuery: buildQuery,
  getNowFormatDate: getNowFormatDate,
  deciToHex: deciToHex,
  logTimeTag: logTime,
  logi: logi,
  DEBUG_MODE: DEBUG_MODE,
  logDebugInfo: logDebugInfo,
  loge: loge,
  formatDateNoYear: formatDateNoYear,
  DEV_ENV: DEV_ENV
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configs", function() { return configs; });

var configs = {
  //线上环境
  // host: '',
  testhost: '',

  paths: {
    /**
     * api接口路径
     * eg. getUserInfo:'/vi/user/getinfo'
     */
    login: '/api/system/login',
    logout: '/api/system/logout',
    getUserInfo: '/api/user/defaultInfo',
    setUserInfo: '/api/user/settings',
    // 微信授权登录
    getSession: '/api/wx/getSession',
    //保存用户信息
    saveUserInfo: '/api/wx/saveUserInfo',
    // 检测rdsession是否过期
    checkRdSession: '/api/wx/checkRdSession',
    //解除微信绑定
    removeBanding: '/api/wx/removeBanding'
  },
  app_interior_url: {
    /**
     * 小程序内页面路径，作为跳转参数
     * 用法：serviceUtils.getAppInteriorUrl('compass')
     */
    index: '/pages/compass/compass',
    login: '/pages/login/login',
    authorization: '/pages/authorization/authorization'
  },
  third_api: {
    /**
     * 第三方api的url
     */
  },
  third_config: {
    /**
     * 第三方api配置
     * eg.
     * qq_map: {
       *  key: 'xxxx-xxxx-xxxx-xxxx'
       * }
     */
  }
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);


var Fly = __webpack_require__(93);
var fly = new Fly();

//添加请求拦截器
fly.interceptors.request.use(function (request) {
  //给所有请求添加自定义header
  request.headers["X-Tag"] = "flyio";
  //打印出请求体
  console.log(request.body);

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
  //只将请求结果的data字段返回
  return response.data;
}, function (err) {
  //发生网络错误后会走到这里
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve("err");
});

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$http = fly; //将fly实例挂在vue原型上

/***/ })

},[41]);
//# sourceMappingURL=app.js.map