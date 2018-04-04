<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/movement-circle/hot">
      <span class="tab-link">热门</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/movement-circle/focus">
      <span class="tab-link">关注</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/movement-circle/live">
      <span class="tab-link">直播</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      tabList: ['热门', '关注', '直播']
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
  .tab{
    display: flex;
    font-size: 14px;
    .tab-item:not(:first-child){
      margin-left: 20px;
    }
    .tab-link{
      padding-bottom: 5px;
      color: #777;
      }
    .router-link-active{
      .tab-link{
        color: green;
        border-bottom: 2px solid green;
      }
    }
  }
</style>
