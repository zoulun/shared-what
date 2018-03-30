<template>
  <div class="movement-circle">
    <div class="search-c">
      <search-link></search-link>
    </div>
    <div class="tab-box">
      <tab></tab>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchLink from 'base/search-link/search-link'
import Tab from 'components/tab/tab'

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    SearchLink,
    Tab
  }
}
</script>

<style scoped lang="less" type="text/less">
.movement-circle{
  padding-bottom: 50px;
  .search-c{
    padding: 20px 20px 0 20px;
  }
  .tab-box{
    margin-top: 20px;
    padding: 0 20px 5px 20px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
