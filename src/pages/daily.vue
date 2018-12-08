<template>
  <div class="container">
    <picker @change="bindPickerChange" :value="index" :range="nameList">
      <div class="picker">
        姓名：{{nameList[index]||'请选择'}}
      </div>
    </picker>

    <div class="title">昨天工作内容：</div>
    <div class="section">
      <textarea v-model="formItem.yesterdaywork" auto-height placeholder="请输入昨天工作内容" />
    </div>

    <div class="title">完成情况：</div>
    <div class="section">
      <textarea v-model="formItem.complate" auto-height placeholder="请输入完成情况" />
    </div>

     <div class="title">今日计划：</div>
    <div class="section">
      <textarea v-model="formItem.todayplan" auto-height placeholder="请输入今日计划" />
    </div>

     <div class="title">存在问题：</div>
    <div class="section">
      <textarea v-model="formItem.problem" auto-height placeholder="请输入存在问题" />
    </div>
    <div class="placeHolder"></div>
    <button class="submit"  @click="submit">提交</button>

  </div>
</template>

<script>
  // import {showToast,showLoading,hideLoading,showModal, showActionSheet} from "../utils/wx_api"
  import input from "@/components/input"
  import toast from 'mpvue-toast'

  export default {
    data() {
      return {
        index:-1,
        nameList: [],
        formItem: {
          uid:12,
          uname:'12',
          todayplan: '',
          yesterdaywork: '',
          complate: '',
          problem: ''
        }
      }
    },
    components: {
      'mr-input':input,
      toast
    },

    methods: {
      bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为',  e.mp.detail.value)
        this.index =  e.mp.detail.value
         //注意：不是官网的e.detail.value,而是 e.mp.detail.value
      },
      submit(){
        this.formItem.name = this.nameList[this.index]
        console.log(this.formItem,12345)
            this.$http.post('http://localhost:3000/daily/add',{data:this.formItem}).then((d)=>{
        //输出请求数据
        this.nameList = d.data.map(item => item.name)
        console.log(this.nameList,123)
        // console.log(d.data)

        }).catch(err=>{
        console.log(err.status,err.message)
        })
      }
    
    },
    created() {
      console.log(123)
      this.$http.get('http://localhost:3000/user/list').then((d)=>{
      //输出请求数据
      this.nameList = d.data.map(item => item.name)
      console.log(this.nameList,123)
      // console.log(d.data)

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
  .picker{
    margin: 20rpx 0 20rpx 20rpx;
    font-size: 35rpx;
  }
  .section{
    padding:20rpx;
    min-height: 100rpx;
    font-size: 35rpx;
    border:1px solid #f1f1f1;
  }
  .title{
    margin: 20rpx 0 20rpx 20rpx;
    font-size: 35rpx;
  }
  .placeHolder{
    height:200rpx;
  }
  .submit{
    position:fixed;
    width:700rpx;
    margin-left:5rpx;
    bottom:10rpx;
    z-index:1000;
    background: #e51279;
    color:#fff;
  }
</style>
