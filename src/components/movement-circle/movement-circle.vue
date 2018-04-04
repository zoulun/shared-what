<template>
  <div class="movement-circle">
    <div class="search-c">
      <search-link></search-link>
    </div>
    <div class="tab">
      <span v-for="(item, index) in tabList" :key="index" class="tab-item">{{item}}</span>
      <div class="active-move-block"></div>
    </div>
    <div class="movement-main">
      <div class="movement-page">
        <!-- <page-slider> -->
          <scroll class="movement-scroll page-item">
            <div>
              <div class="hot-container">
                <div v-if="sliderList.length" class="banner">
                  <slider>
                    <div v-for="(item, index) in sliderList" :key="index"  class="banner-item">
                      <img :src="item" alt="">
                    </div>
                  </slider>
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
                    <div v-if="topicTab.length" class="bottom">
                      <tab-slider>
                        <ul class="lable-list">
                          <li class="lable-item" v-for="(item, index) in topicTab" :key="index">#{{item}}</li>
                        </ul>
                      </tab-slider>
                    </div>
                  </div>
                </div>
                <div class="handpicked">
                  <div class="handpicked-container">
                    <h2 class="handpicked-title">精选</h2>
                    <div>
                      <ul class="handpicked-list">
                        <li class="handpicked-item" v-for="(item, index) in movementCircleHot.topicHandpickedList" :key="index" @click="selectDetail(item.id)">
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
            </div>
            <div class="loading-container" v-show="!movementCircleHot.topicHandpickedList">
              <loading class="loading-content"></loading>
            </div>
          </scroll>
          <div class="page-item">关注</div>
        <!-- </page-slider> -->
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchLink from 'base/search-link/search-link'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import Slider from 'base/slider/slider'
import PageSlider from 'base/page-slider/page-slider'
import TabSlider from 'base/tab-slider/tab-slider'
import {getMovementCircleHot, getSliderList} from 'api/movement-circle'
// import Tab from 'components/tab/tab'

export default {
  data () {
    return {
      tabList: ['热门', '关注', '直播'],
      sliderList: [],
      movementCircleHot: [],
      topicTab: [],
      freeScroll: true
    }
  },
  created () {
    this._getSliderList()
    this._getMovementCircleHot()
  },
  methods: {
    _getMovementCircleHot () {
      getMovementCircleHot().then((res) => {
        this.movementCircleHot = res.data
        this.topicTab = res.data.topicTab
      })
    },
    _getSliderList () {
      getSliderList().then((res) => {
        this.sliderList = res.data
      })
    },
    selectDetail (id) {
      this.$router.push({
        path: `/movement-circle/${id}`
      })
    }
  },
  components: {
    SearchLink,
    Scroll,
    Loading,
    Slider,
    PageSlider,
    TabSlider
    // Tab
  }
}
</script>

<style scoped lang="less" type="text/less">
.movement-circle{
  .search-c{
    padding: 20px 20px 0 20px;
  }
  .tab{
      position: relative;
      margin-top: 20px;
      padding: 0 20px 4px 20px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      .active-move-block{
        width: 28px;
        height: 2px;
        background: green;
        position: absolute;
        bottom: 0;
      }
    }
    .tab-item:not(:first-child){
      margin-left: 20px;
    }
  .movement-main{
    position: relative;
    .movement-page{
      position: fixed;
      width: 100%;
      top: 94px;
      bottom: 50px;
      .page-item{
        width: 100%;
        float: left;
      }
      .movement-scroll{
        height: 100%;
        overflow: hidden;
        .banner{
          position: relative;
          padding: 20px;
        }
        .banner-item{
          font-size: 0;
          float: left;
        }
        img{
          width: 100%;
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
              width: 100%;
              padding-top: 10px;
              font-size: 12px;
              overflow: hidden;
              .lable-list{
                display: flex;
                .lable-item{
                  padding: 4px;
                  border-radius: 20px;
                  background: #f5f5f5;
                  white-space: nowrap;
                }
                .lable-item:not(:first-child){
                  margin-left: 10px;
                }
              }
            }
          }
        }
        .handpicked{
          border-top: 10px solid #f5f5f5;
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
                font-size: 12px;
                overflow: hidden;
                &>img{
                  width: 100%;
                  height: 150px;
                  border-radius: 4px;
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
    }
    // .tab-item{
    //   display: inline-block;
    //   padding-bottom: 5px;
    //   &.active{
    //     border-bottom: 2px solid green;
    //   }
    // }
  }
  .tab-box{
    margin-top: 20px;
    padding: 0 20px 5px 20px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
