<template>
  <div class="footer-tab">
    <router-link tag="div" class="tab-item" to="/movement-circle">
      <span class="tab-link">运动圈</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/found">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/movement">
      <span class="tab-link">运动</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/dry-goods">
      <span class="tab-link">干货</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="less" type="text/less">
  .footer-tab{
    display: flex;
    font-size: 14px;
    .tab-item{
      flex: 1;
      text-align: center;
    }
    .tab-link{
        color: #ccc;
      }
    .router-link-active{
      .tab-link{
        color: green
      }
    }
  }
</style>
