<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterTab></FooterTab>
  </div>
</template>

<script>
import FooterTab from 'components/footer-tab/footer-tab'

export default {
  components: {
    FooterTab
  }
}
</script>

<style scoped lang="less" type="text/less">
// .el-container{
//   .el-footer{
//     width: 100%;
//     position: fixed;
//     bottom: 0;
//     height: 50px!important;
//     line-height: 50px!important;
//     box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
//   }
//   .box{
//     width: 100px;
//     height: 100px;
//     background: #f5f5f5;
//   }
// }
</style>
