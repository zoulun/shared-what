<template>
  <transition name="slider">
    <div class="detail-container">
      <div class="header">
        <div class="back">
          <i class="el-icon-arrow-left" @click="back"></i>
        </div>
        <span class="title">详情</span>
      </div>
      <div class="detai-content">
        <div class="detail">
          <div class="user">
            <div class="left">
              <img class="photo" :src="movementDetail.photo" alt="">
            </div>
            <div class="right">
              <p class="name">{{movementDetail.name}}</p>
              <p class="time">{{movementDetail.time}}小时前</p>
            </div>
          </div>
          <p class="desc">{{movementDetail.desc}}</p>
          <ul class="show-photo-list">
            <li v-for="(item, index) in movementDetail.showPhoto" :key="index" class="photo-item">
              <img :src="item" alt="">
            </li>
          </ul>
          <div class="address-box">
            <i class="el-icon-location"></i>
            <span class="text">{{movementDetail.address}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import {getMovementDetail} from 'api/movement-circle'

export default {
  data () {
    return {
      movementDetail: {}
    }
  },
  created () {
    this.$nextTick(() => {
      this._getMovementDetail()
    })
  },
  methods: {
    back () {
      this.$router.back()
    },
    _getMovementDetail () {
      getMovementDetail().then((res) => {
        this.movementDetail = res.data
        console.log(res)
      })
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
  .detail-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 9;
    .header{
      position: relative;
      width: 100%;
      height: 40px;
      line-height: 40px;
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
    .detail{
      padding: 20px;
    }
    .user{
      display: flex;
      .photo{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .left{
        font-size: 0;
      }
      .right{
        padding-top: 10px;
        margin-left: 10px;
        font-size: 12px;
        .time{
          color: #ccc;
        }
      }
    }
    .desc{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      font-size: 14px;
    }
    .show-photo-list{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 0;
      .photo-item{
        width: 32%;
        margin-top: 5px;
        img{
          width: 100%;
          border-radius: 4px;
        }
      }
    }
    .address-box{
      font-size: 12px;
      color: #666;
      margin-top: 10px;
      i{
        color: #ccc;
      }
      .text{
        margin-left: 5px;
      }
    }
  }
</style>
