<script>
  const authorization =  require('./utils/http/authorization.js');
  const App = getApp();
  export default {
    data: {
      globalData: {
        userInfo: {}
      }
    },
  onLaunch(options){
      console.log(options);
  },
  created () {
//   小程序启动时检测是否授权
//    authorization.authorization();
  }
}
</script>

<style>

</style>
