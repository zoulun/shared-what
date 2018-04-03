<template>
  <div class="slider" ref="slider">
    <div class="slider-group clearfix" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span v-for="(item, index) in dots" class="dots-item" :key="index" :class="{'active': currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
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
      this._initDots()

      if (this.autoPlay) {
        this._play()
      }
    }, 3000)

    window.addEventListener('resize', () => {
      if (this.slider) {
        this._initSliderWidth(true)
        this.slider.refresh()
      }
    })
  },
  methods: {
    _initSliderWidth (isResize) {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }

      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        stopPropagation: true,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          this._play()
        }
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length - 2)
    },
    _play () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.slider{
  width: 100%;
  position: relative;
  overflow: hidden;
  .dots{
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: center;
    .dots-item{
      width: 8px;
      height: 8px;
      display: inline-block;
      margin: 0 4px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4s);
    }
    .active{
      width: 20px;
      border-radius: 5px;
      background: #fff;
    }
  }
}
</style>
