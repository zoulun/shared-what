<template>
  <div id="wrapper" class="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import IScroll from 'iscroll'

export default {
  mounted () {
    setTimeout(() => {
      this._initIScroll()
    }, 20)
  },
  methods: {
    _initIScroll () {
      this.scroll = new IScroll('#wrapper', {
        click: true
      })
      console.log(this.scroll)
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
</style>
