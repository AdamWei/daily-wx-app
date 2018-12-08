<template>
    <div class="container">
      列表页
      <a href="/packageB/activity" class="go">去往活动页面</a>
    </div>
</template>
<script>
    export default {
        name: ' ',
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
  .container{
    padding: 20rpx;
    font-size: 28rpx;
    text-align: center;
    .go{
      margin-top: 40rpx;
      border-radius: 10rpx;
      border: 1px solid #ccc;
      line-height: 80rpx;
    }
  }
</style>
