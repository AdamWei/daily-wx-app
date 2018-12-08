module.exports = [
  {
    path: 'pages/index',// 页面路径，同时是 vue 文件相对于 src 的路径
    config: {    
        "usingComponents": {      
          'i-button': '../static/dist/button/index',
          'i-card': '../static/dist/card/index',
          'i-radio': '../static/dist/radio/index',
          'i-toast': '../static/dist/toast/index',
        }
      }
  },{
    path: 'pages/authorization'
  },{
    path: 'pages/daily'
  },{
    path: 'pages/dailies'
  }, {
    path: 'packageA/list',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '列表页'
    }
  }, {
    path: 'packageB/activity',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '活动页'
    }
  }

]
