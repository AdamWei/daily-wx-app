// 获取code
export function login () {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}
// 校验用户当前session_key是否有效。
export function checkSession () {
  return new Promise((resolve, reject) => {
    wx.checkSession({ success: resolve, fail: reject })
  })
}
// 获取用户信息
export function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}


export function setStorageSync(key,value) {
    wx.setStorageSync(key,value)
}

export function getStorageSync(key) {
    wx.getStorageSync(key)
}

// 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
export function navigateTo (url) {
  return new Promise((resolve, reject) => {
    wx.navigateTo({ url: url, success: resolve, fail: reject })
  })
}

// 关闭当前页面，跳转到应用内的某个页面
export function redirectTo (url) {
  return new Promise((resolve, reject) => {
    wx.redirectTo({ url: url, success: resolve, fail: reject })
  })
}

// 关闭所有页面，打开到应用内的某个页面。
export function reLaunch (url) {
  return new Promise((resolve, reject) => {
    wx.reLaunch({ url: url, success: resolve, fail: reject })
  })
}

// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
export function switchTab (url) {
  return new Promise((resolve, reject) => {
    wx.switchTab({ url: url, success: resolve, fail: reject })
  })
}

export function getLocation (type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

// 显示消息提示框

export function showToast(title='成功',icon='success',duration=2000) {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  })
}


// 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框

export function showLoading(title='加载中...') {
  wx.showLoading({
    title: title,
  })
}

// 隐藏loading提示框
export function hideLoading() {
   wx.hideLoading()
}

export function showModal(title='提示',content="这是一个模态弹窗") {
  return new Promise((resolve,reject)=>{
    wx.showModal({
      title: title,
      content: content,
      success: function(res) {
        resolve(res)
      }
    })
  })
}

export function showActionSheet(list) {
   return new Promise((resolve,reject)=>{
     wx.showActionSheet({
       itemList: list,
       success: function(res) {
         resolve(res)
       },
       fail: function(res) {
         reject(res.errMsg)
       }
     })
   })
}
