<template>
  <div class="page-slider" ref="pageSlider">
    <div class="slider-group clearfix" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._initSliderWidth()
      this._initSlider()
    }, 3000)
  },
  methods: {
    _initSliderWidth () {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let winWidth = document.body.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.style.width = winWidth + 'px'
        width += child.clientWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.scroll = new BScroll(this.$refs.pageSlider, {
        scrollX: true,
        scrollY: false,
        freeScroll: true,
        momentum: false,
        snap: {
          loop: false,
          threshold: 0.3,
          speed: 400
        }
      })
      this.scroll.on('scrollEnd', () => {
        let pageIndex = this.scroll.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
      })
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.page-slider{
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
