<template>
  <div class="container">
    <div class="itemView" @click="write">
        <div class='navigator'>填写日报</div>
      </div>
      <div class="itemView" @click="look">
        <div class='navigator'>查看日报</div>
      </div>
      <div class="itemView">
        <div class='navigator'>修改密码</div>
      </div>
      <div class="itemView">
        <span class='navigator' bindtouchstart='logout'>退出登录</span>
      </div>
      <div class="itemView">
        <span class='navigator' @click='toRegister'>用户注册</span>
      </div>

  </div>
</template>

<script>

  import input from "@/components/input"
  import toast from 'mpvue-toast'

  export default {
    data() {
      return {
      }
    },
    components: {
      'mr-input':input,
      toast
    },

    methods: {
     write(){
       wx.navigateTo({
        url: '/pages/daily'
      })
     },
     look(){
       wx.navigateTo({
        url: '/pages/dailies'
      })
     },
     toRegister() {
       wx.navigateTo({
         url:'/pages/register'
       })
     }
    },
    created() {
      console.log(123)
    },
    
    onShareAppMessage: function () {

    }
  }
</script>

<style scoped>
  .container{
    padding: 20rpx;
    margin-top: 40rpx;
  }
  .itemView{
    height: 100rpx;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    width:460rpx;
    margin: 0 auto;
    margin-top:80rpx;
    background-color: #e51279;
    border: 1px solid #e51279;
    border-radius: 4px;
  }

  .navigator{
    text-align: center;
    width:230px;
    font-size: 20px;
    color: #ffffff;
  }
</style>
