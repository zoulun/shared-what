<template>
  <transition name="slider">
    <div class="map-page">
      <div class="header">
        <div class="back">
          <i class="el-icon-arrow-left" @click="back"></i>
        </div>
        <span class="title">运动场</span>
      </div>
      <div id="map-container" class="map-container"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import AMap from 'AMap'
import AMapUI from 'AMapUI'

export default {
  data () {
    return {
      currentPosition: [],
      MWalkRouter: {}
    }
  },
  mounted () {
    this._initAMap()
  },
  methods: {
    _initAMap () {
      this.map = new AMap.Map('map-container', {
        zoom: 18,
        center: [104.034058, 30.55848],
        resizeEnable: true
      })

      this.map.plugin('AMap.Geolocation', () => {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonOffset: new AMap.Pixel(10, 20),
          // zoomToAccuracy: true,
          buttonPosition: 'RB'
        })
        this.map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', this.geolocationComplete)
        AMap.event.addListener(geolocation, 'fail', this.geolocationError)
      })

      this._initPositionPicker()
      this.walkingInfo()
    },
    _initMarkers () {
      let positions = []
      let currentX = this.currentPosition[0].toFixed(3)
      let currentY = this.currentPosition[1].toFixed(3)
      for (let i = 0; i < 20; i++) {
        let lnglat = []
        let x = currentX + Math.floor(Math.random() * 1000)
        let y = currentY + Math.floor(Math.random() * 1000)
        lnglat.push(x, y)
        positions.push(lnglat)
      }
      for (let j = 0; j < positions.length; j++) {
        let marker = new AMap.Marker({
          map: this.map,
          position: positions[j],
          animation: 'AMAP_ANIMATION_DROP'
        })
        AMap.event.addListener(marker, 'click', (res) => {
          let lnglat = []
          let x = res.lnglat.lng
          let y = res.lnglat.lat
          lnglat.push(x, y)
          this._initWalking(lnglat)
        })
      }
    },
    walkingInfo () {
      // 构造信息窗
      this.infoWindow = new AMap.InfoWindow({
        autoMove: false
      })
    },
    _initPositionPicker () {
      AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
        this.positionPicker = new PositionPicker({
          mode: 'dragMap',
          map: this.map
        })
        this.positionPicker.start()
        this.positionPicker.on('success', this.positionPickerSuccess)
        this.positionPicker.on('fail', this.positionPickerError)
      })
    },
    _initWalking (lnglat) {
      AMap.service('AMap.Walking', () => {
        if (this.MWalk) {
          this.MWalk.clear()
        }
        this.MWalk = new AMap.Walking({
          map: this.map,
          hideMarkers: true,
          autoFitView: false
        })
        this.MWalk.search(this.currentPosition, lnglat, (status, res) => {
          if (status === 'complete') {
            let data = res
            this.MWalkRouter = {
              distance: data.routes[0].distance,
              time: Math.ceil(data.routes[0].time / 60)
            }
            let content = `<div>
              <p>时间：${this.MWalkRouter.time}分钟</p>
              <p>距离：${this.MWalkRouter.distance}米</p>
            </div>`
            this.infoWindow.setContent(content)
            this.infoWindow.open(this.map, data.destination)
            console.log(status, data)
          }
        })
      })
    },
    positionPickerSuccess (res) {
      let lnglat = []
      let x = res.position.lng
      let y = res.position.lat
      lnglat.push(x, y)
      this.currentPosition = lnglat
      this._initMarkers()
    },
    positionPickerError () {
    },
    geolocationComplete (data) {
      let lnglat = []
      let x = data.position.lng
      let y = data.position.lat
      lnglat.push(x, y)
      this.currentPosition = lnglat
      // console.log(JSON.stringify(data))
    },
    geolocationError () {
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.slider-enter-active, .slider-leave-active{
  transition: all 0.3s;
}
.slider-enter, .slider-leave-to{
  transform: translate3d(100%, 0, 0);
}
.map-page{
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0px;
  background: #fff;
  z-index: 9;
  .header{
    position: relative;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
    .back{
      position: absolute;
      left: 10px;
      top: 0;
      font-size: 20px;
      .el-icon-arrow-left{
        padding: 10px;
      }
    }
    .title{
      font-size: 18px;
    }
  }
  .map-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 45px;
    bottom: 0;
  }
}
</style>
