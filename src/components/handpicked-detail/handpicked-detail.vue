<template>
  <transition name="slider">
    <div class="detail-container">
      <div class="header">
        <div class="back">
          <i class="icon icon-back" @click="back"></i>
        </div>
        <span class="title">详情</span>
      </div>
      <div class="detai-content" ref="detaiContent">
        <scroll class="detail-scroll" ref="scroll">
          <div>
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
            <div class="star-photo">
              <p v-if="starPhoto.length" class="text">{{starPhoto.length}}人赞了</p>
              <div class="photo-box">
                <ul class="left">
                  <li v-for="(item, index) in starPhotoList" :key="index" class="item">
                    <img :src="item" alt="">
                  </li>
                </ul>
                <div class="right" v-if="isMore">
                  <i class="icon icon-more"></i>
                </div>
              </div>
            </div>
            <div class="evaluation">
              <p class="evaluation-num">{{evaluation.length}}条评论</p>
              <ul class="evaluation-list">
                <li v-for="(item, index) in evaluation" :key="index" class="evaluation-item">
                  <div class="user-container">
                    <div class="user">
                      <div class="user-photo">
                        <img :src="item.photo" alt="">
                      </div>
                      <div class="text-box">
                        <p class="name">{{item.name}}</p>
                        <p class="time">{{item.time}}分钟前</p>
                      </div>
                    </div>
                    <div class="operation">
                      <i class="icon icon-reply"></i>
                      <i class="icon icon-good" :class="{'is-star': item.isStar}" @click="selectGood(item)"></i>
                      <span class="star-num">{{item.starNum}}</span>
                    </div>
                  </div>
                  <p class="text">{{item.text}}</p>
                </li>
              </ul>
            </div>
          </div>
        </scroll>
      </div>
      <div class="fixed-bottom">
        <div class="evaluation-container">
          <i class="icon icon-smiling"></i>
          <input type="text" v-model="evaluationText" placeholder="我要评论" @input="evaluationChange">
          <mt-button size="small" class="send-btn" ref="sendBtn" disabled>发送</mt-button>
          <!-- <button class="send-btn" ref="sendBtn" :class="{'v-disabled': evaluationText.length === 0}" disabled>发送</button> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import {getMovementDetail} from 'api/movement-circle'
import {scrollMixin} from 'common/js/mixin'
import {addClass, removeClass} from 'common/js/dom'

export default {
  mixins: [scrollMixin],
  data () {
    return {
      movementDetail: {},
      starPhoto: [],
      starPhotoList: [],
      evaluation: [],
      evaluationText: '',
      isMore: false
    }
  },
  created () {
    this.$nextTick(() => {
      this._getMovementDetail()
    })
  },
  mounted () {
    this.scrollPositionBottom('detaiContent')
  },
  methods: {
    back () {
      this.$router.back()
    },
    _getMovementDetail () {
      getMovementDetail().then((res) => {
        this.movementDetail = res.data
        this.starPhoto = res.data.starPhoto
        this.evaluation = res.data.evaluation
        if (this.starPhoto.length > 0) {
          this._initStarPhoto()
        }
        console.log(res)
      })
    },
    _initStarPhoto () {
      const PHOTOWIDTH = 50
      const PHOTOMARGIN = 5
      let docWidth = document.body.clientWidth
      let showStarPhoth = Math.floor(docWidth / (PHOTOWIDTH + PHOTOMARGIN))
      if (this.starPhoto.length >= showStarPhoth) {
        this.starPhotoList = this.starPhoto.slice(0, showStarPhoth - 2)
        this.isMore = true
      } else {
        this.starPhotoList = this.starPhoto
        this.isMore = false
      }
      window.addEventListener('resize', () => {
        this._initStarPhoto()
      })
    },
    selectGood (item) {
      item.isStar = !item.isStar
      item.starNum = item.isStar ? item.starNum + 1 : item.starNum - 1
    },
    evaluationChange () {
      let _el = this.$refs.sendBtn.$el
      if (this.evaluationText.length === 0) {
        this.$refs.sendBtn.$el.setAttribute('disabled', 'disabled')
        addClass(_el, 'is-disabled')
        removeClass(_el, 'active-btn')
      } else {
        this.$refs.sendBtn.$el.removeAttribute('disabled')
        addClass(_el, 'active-btn')
        removeClass(_el, 'is-disabled')
      }
    }
  },
  components: {
    Scroll
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
    .detai-content{
      position: fixed;
      width: 100%;
      top: 45px;
      bottom: 0px;
      overflow: hidden;
    }
    .detail-scroll{
      height: 100%;
      overflow: hidden;
    }
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
        .icon-back{
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
    .star-photo{
      padding: 0 20px;
      .text{
        font-size: 12px;
        color: #999;
      }
      .photo-box{
        display: flex;
        margin-top: 5px;
        .left{
          display: flex;
          flex: 1;
          flex-wrap: nowrap;
          overflow: hidden;
          .item{
            margin-right: 5px;
            font-size: 0;
            img{
              width: 50px;
              height: 50px;
              border-radius: 50%
            }
          }
        }
        .right{
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #eee;
          border-radius: 50%;
        }
      }
    }
    .evaluation{
      margin-top: 15px;
      .evaluation-num{
        font-size: 12px;
        padding-left: 20px;
      }
      .evaluation-item{
        box-sizing: border-box;
        padding: 20px;
        font-size: 12px;
        border-bottom: 1px solid #eee;
        .user-container{
          display: flex;
          justify-content: space-between;
          .user{
            display: flex;
            img{
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
          .operation{
            font-size: 18px;
            i{
              padding: 7px;
            }
            .is-star{
              color: #26a72b;
            }
            .star-num{
              font-size: 12px;
            }
          }
          .text-box{
            padding-top: 10px;
            margin-left: 10px;
          }
        }
        .text{
          font-size: 14px;
          padding-left: 60px;
        }
      }
    }
    .fixed-bottom{
      position: fixed;
      width: 100%;
      bottom: 0;
      background: #f8f8f8;
      padding: 5px;
      box-sizing: border-box;
      .evaluation-container{
        display: flex;
        i{
          font-size: 30px;
          color: #a6a6a6;
        }
        input{
          flex: 1;
          margin: 0 5px;
          padding: 0 5px;
          background: #fff;
          border: none;
          outline: none;
          box-sizing: border-box;
          border-radius: 10px;
        }
        .send-btn{
          display: inline-block;
          font-size: 14px;
          padding: 0 12px;
          height: 33px;
          border-radius: 20px;
          border: none;
          outline: none;
        }
        .active-btn{
          background: #1ccccc;
          color: #fff;
        }
        .send-btn.v-disabled{
          background: #e1e1e1;
        }
      }
    }
  }
</style>
