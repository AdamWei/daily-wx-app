<template>
  <div class="container">
    
      <div v-for="(item,index) in list" :key="index">{{item.uname}}</div>
    

  </div>
</template>

<script>
  // import {showToast,showLoading,hideLoading,showModal, showActionSheet} from "../utils/wx_api"
  import input from "@/components/input"
  import toast from 'mpvue-toast'

  export default {
    data() {
      return {
          list:[]
      }
    },
    components: {
      'mr-input':input,
      toast
    },

    methods: {
     
     
    
    },
    created() {
      this.$http.get('http://localhost:3000/daily/list').then((d)=>{
      //输出请求数据
        this.list = d.data
      }).catch(err=>{
        console.log(err.status,err.message)
      })
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
 
</style>
