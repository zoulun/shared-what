<template>
  <div class="search-link">
    <i class="el-icon-search"></i>
    <span class="placeholder-text">{{placeholder}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索用户圈 运动团 文章 动态 商品'
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
  .search-link{
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background: #f5f5f5;
    border-radius: 4px;
    .placeholder-text{
      font-size: 14px;
    }
  }
</style>
