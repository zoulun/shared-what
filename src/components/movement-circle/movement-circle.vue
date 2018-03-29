<template>
  <div class="movement-circle">
    <search-link></search-link>
    <div class="tab-box">
      <tab></tab>
    </div>
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
  .tab-box{
    margin-top: 20px;
  }
}
</style>
