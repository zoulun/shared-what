<template>
  <div class="tab-slider" ref="tabSlider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  mounted () {
    setTimeout(() => {
      this._initTopicTabWidth()
      this._initTopicTab()
    }, 20)
  },
  methods: {
    _initTopicTabWidth () {
      this.child = this.$refs.sliderGroup.children[0].children
      let marginWidth = this.child.length * 10 - 10
      let width = 0
      for (let i = 0; i < this.child.length; i++) {
        width += this.child[i].clientWidth
      }
      this.$refs.sliderGroup.style.width = width + marginWidth + 'px'
    },
    _initTopicTab () {
      this.topicTabScroll = new BScroll(this.$refs.tabSlider, {
        scrollX: true,
        scrollY: false,
        stopPropagation: true
      })
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
</style>
