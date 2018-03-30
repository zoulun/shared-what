<template>
  <div class="loading">
    <i class="el-icon-loading"></i>
    <p class="desc">{{desc}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    desc: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.loading{
  width: 100%;
  text-align: center;
  .desc{
    font-size: 12px;
    color: #fff;
  }
}
</style>
