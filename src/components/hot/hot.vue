<template>
  <div class="hot-container">
    <scroll class="hot-content">
      <div>
        <div class="banner">
          <ul class="banner-list">
            <li class="">
              <img src="../../common/image/banner.jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="topic">
          <div class="topic-container">
            <div class="topic-title">
              <h2>热门话题</h2>
              <span class="more">更多 ></span>
            </div>
            <div class="content">
              <div class="left">
                <img :src="movementCircleHot.topicIamge" alt="">
              </div>
              <div class="right">
                <h3 class="title">#{{movementCircleHot.topicTitle}}</h3>
                <p class="disc">{{movementCircleHot.topicDisc}}</p>
                <div class="participate">{{movementCircleHot.participate}}人参与</div>
              </div>
            </div>
            <div class="bottom">
              <ul>
                <li class="lable-list" v-for="(list, index) in movementCircleHot.topicTab" :key="index">#{{list}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="handpicked">
          <div class="handpicked-container">
            <h2 class="handpicked-title">精选</h2>
            <div>
              <ul class="handpicked-list">
                <li class="handpicked-item" v-for="(item, index) in movementCircleHot.topicHandpickedList" :key="index">
                  <img :src="item.handpickedIamge" alt="">
                  <div>
                    <p class="desc">{{item.handpickedDisc}}</p>
                    <div class="bottom">
                      <div class="left">
                        <img :src="item.photo" alt="">
                        <span>{{item.name}}</span>
                      </div>
                      <div class="right">
                        <i class="el-icon-star-off"></i>
                        <span>{{item.starNum}}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="loading-container" v-show="!movementCircleHot.topicHandpickedList">
        <loading class="loading-content"></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {getMovementCircleHot} from 'api/movement-circle'

export default {
  data () {
    return {
      movementCircleHot: []
    }
  },
  created () {
    this._getMovementCircleHot()
  },
  methods: {
    _getMovementCircleHot () {
      getMovementCircleHot().then((res) => {
        this.movementCircleHot = res.data
        console.log(this.movementCircleHot)
      })
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style scoped lang="less" type="text/less">
.hot-container{
  position: fixed;
  width: 100%;
  top: 95px;
  bottom: 50px;
  .hot-content{
    height: 100%;
    overflow: hidden;
  }
  .banner{
    position: relative;
  }
  .banner-list{
    padding: 20px;
    li{
      font-size: 0;
    }
    img{
      width: 100%;
    }
  }
  .topic{
    position: relative;
    border-top: 10px solid #f5f5f5;
    .topic-container{
      padding: 20px;
      .topic-title{
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        .more{
          font-size: 12px;
          color: #ccc;
        }
      }
      .content{
        display: flex;
        .left{
          width: 80px;
          height: 80px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right{
          flex: 1;
          margin-left: 20px;
          .title{
            font-size: 16px;
          }
          .disc{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: 12px;
            color: #888;
            margin-top: 5px;
          }
          .participate{
            font-size: 12px;
            color: #ccc;
            margin-top: 5px;
          }
        }
      }
      .bottom{
        padding-top: 10px;
        font-size: 12px;
        &>ul{
          display: flex;
          .lable-list{
            padding: 4px;
            border-radius: 20px;
            background: #f5f5f5;
          }
        }
      }
    }
  }
  .handpicked{
    border-top: 10px solid #f5f5f5;
    font-size: 12px;
    .handpicked-container{
      padding: 20px;
      .handpicked-title{
        padding-bottom: 10px;
      }
      .handpicked-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .handpicked-item{
          position: relative;
          flex: 0 0 48%;
          margin-bottom: 10px;
          overflow: hidden;
          &>img{
            width: 100%;
            height: 150px;
          }
          .desc{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
          .bottom{
            display: flex;
            justify-content: space-between;
            height: 25px;
            line-height: 25px;
            margin-top: 5px;
            img{
              width: 20px;
              height: 20px;
              border-radius: 50%;
              vertical-align: top;
            }
          }
        }
      }
    }
  }
  .loading-container{
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    .loading-content{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
