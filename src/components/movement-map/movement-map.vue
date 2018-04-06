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
      currentPosition: []
    }
  },
  mounted () {
    this._initAMap()
  },
  methods: {
    _initAMap () {
      AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
        this.map = new AMap.Map('map-container', {
          resizeEnable: true,
          zoom: 18,
          center: [104.034058, 30.55848]
        })

        this.positionPicker = new PositionPicker({
          mode: 'dragMap',
          map: this.map
        })
        this.positionPicker.start()
        this.positionPicker.on('success', this.positionPickerSuccess)
        this.positionPicker.on('fail', this.positionPickerError)

        this.map.plugin('AMap.Geolocation', () => {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            buttonOffset: new AMap.Pixel(10, 20),
            zoomToAccuracy: true,
            buttonPosition: 'RB'
          })
          this.map.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', this.geolocationComplete)
          AMap.event.addListener(geolocation, 'error', this.geolocationError)
        })

        this._initMarkers()
      })
    },
    _initMarkers () {
      var MWalk
      let positions = []
      for (let i = 0; i < 20; i++) {
        let lnglat = []
        let x = '104.033' + Math.floor(Math.random() * 1000)
        let y = '30.557' + Math.floor(Math.random() * 1000)
        lnglat.push(x, y)
        positions.push(lnglat)
      }
      console.log(positions)
      for (let j = 0; j < positions.length; j++) {
        let marker = new AMap.Marker({
          map: this.map,
          position: positions[j],
          animation: 'AMAP_ANIMATION_DROP'
        })
        AMap.event.addListener(marker, 'click', () => {
          console.log(marker.getPosition())
          let lnglat = []
          let x = marker.getPosition().lng
          let y = marker.getPosition().lat
          lnglat.push(x, y)
          AMap.service('AMap.Walking', () => {
            if (MWalk) {
              MWalk.clear()
            }
            MWalk = new AMap.Walking({
              map: this.map,
              hideMarkers: true
            })
            console.log(this.currentPosition)
            MWalk.search(this.currentPosition, lnglat)
          })
        })
      }
    },
    positionPickerSuccess (res) {
      console.log(JSON.stringify(res.position))
      let lnglat = []
      let x = res.position.lng
      let y = res.position.lat
      lnglat.push(x, y)
      this.currentPosition = lnglat
    },
    positionPickerError () {
    },
    geolocationComplete (data) {
      let lnglat = []
      let x = data.position.lng
      let y = data.position.lat
      lnglat.push(x, y)
      this.currentPosition = lnglat
      // alert(JSON.stringify(data))
    },
    geolocationError (err) {
      console.log(JSON.stringify(err))
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
