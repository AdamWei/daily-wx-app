<template>
    <div class="container">
      <img src="../../static/images/search.png" alt="" class="search">
      <input type="text" :placeholder="placeholderText" class="input" placeholder-class="placeholder" @blur="inputEnter" >
    </div>
</template>
<script>
    export default {
      props:{
        placeholderText:String
       },
        data() {
            return {

            }
        },
      methods:{
        inputEnter(e){
          this.$emit('inputText',e.mp.detail.value);
          console.log(e);
        }
      }
    }
</script>

<style scoped lang="less">
  .container{
    position: relative;
    background: #F5F5F5;
    padding:10rpx 16rpx;
    box-sizing: border-box;
    .search{
      position: absolute;
      top:18rpx;
      left: 22rpx;
      z-index:100;
      width: 36rpx;
      height: 36rpx;
    }
    .input{
      padding-left: 50rpx;
      background: #fff;
      line-height: 60rpx;
      font-size: 24rpx;
      color: #000;
    }
    .placeholder{
      color: #999;
    }
  }
</style>
