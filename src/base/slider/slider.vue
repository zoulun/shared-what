<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted () {
    setTimeout(() => {
      this._initSliderWidth()
      this._initSlider()

      if (this.autoPlay) {
        // this._play()
      }
    }, 3000)
  },
  methods: {
    _initSliderWidth () {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.style.width = child.clientWidth + 'px'
        width += child.clientWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }

      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.scroll = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      // this.scroll.on('scrollEnd', () => {
      //   let pageIndex = this.scroll.getCurrentPage().pageX
      //   if (this.loop) {
      //     pageIndex -= 1
      //   }
      // })
    },
    _play () {
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.slider{
  width: 100%;
  overflow: hidden;
}
</style>
