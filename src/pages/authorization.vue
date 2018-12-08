<template>
  <div class="container">
    <div class="logo-box">
      <img src="../../static/images/Group.png" class="logo" alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="subtitle">{{subtitle}}</div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo" >点击微信授权登陆</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: '每日优鲜',
      subtitle:'需要微信授权才能访问优鲜小程序'
    }
  },

  components: {

  },

  methods: {
    getUserInfo (e) {
      // 调用登录接口
      let userInfo = e.mp.detail.userInfo;

      wx.redirectTo({
        url: '/pages/index'
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    console.log('授权页面');
  }
}
</script>

<style scoped lang="less">
.logo-box{
   margin: 220rpx auto;
   margin-bottom: 0;
  .logo{
    width: 132rpx;
    height: 132rpx;
    display: block;
    margin: 0 auto;
  }
}
  .title{
    text-align: center;
    font-size: 40rpx;
    color: #474245;
    margin-top: 16rpx;
    margin-bottom: 12rpx;
  }
  .subtitle{
    text-align: center;
    font-size: 32rpx;
    color: #474245;
  }
  button{
    background: #FF4891;
    border-radius: 200rpx;
    width: 540rpx;
    height: 80rpx;
    line-height: 80rpx;
    color: #fff;
    font-size: 28rpx;
    text-align: center;
    margin-top:80rpx;
  }
</style>
