
export const configs = {
  //线上环境
  // host: '',
  testhost: '',

  paths: {
    /**
     * api接口路径
     * eg. getUserInfo:'/vi/user/getinfo'
     */
    login:'/api/system/login',
    logout: '/api/system/logout',
    getUserInfo:'/api/user/defaultInfo',
    setUserInfo: '/api/user/settings',
    // 微信授权登录
    getSession:'/api/wx/getSession',
    //保存用户信息
    saveUserInfo:'/api/wx/saveUserInfo',
    // 检测rdsession是否过期
    checkRdSession:'/api/wx/checkRdSession',
    //解除微信绑定
    removeBanding:'/api/wx/removeBanding'
  },
  app_interior_url: {
    /**
     * 小程序内页面路径，作为跳转参数
     * 用法：serviceUtils.getAppInteriorUrl('compass')
     */
    index: '/pages/compass/compass',
    login: '/pages/login/login',
    authorization: '/pages/authorization/authorization',
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
}
