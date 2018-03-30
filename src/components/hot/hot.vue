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
          <!-- <div class="divider-line"></div> -->
        </div>
        <div class="topic">
          <div class="topic-container">
            <div class="topic-title">
              <h2>热门话题</h2>
              <span class="more">更多 ></span>
            </div>
            <div class="content">
              <div class="left">
                <!-- <img src="../../common/image/banner.jpg" alt=""> -->
              </div>
              <div class="right">
                <h3 class="title">#我买跑鞋怎么了</h3>
                <p class="disc">谁说买跑鞋就是浪费钱？我不服！谁说买跑鞋就是浪费钱？我不服！</p>
                <div class="participate">6666人参与</div>
              </div>
            </div>
            <div class="bottom">
              <ul>
                <li class="lable-list" v-for="(list, index) in topicLabel" :key="index">{{list}}</li>
              </ul>
            </div>
          </div>
          <!-- <div class="divider-line"></div> -->
        </div>
        <div class="handpicked">
          <div class="handpicked-container">
            <h2 class="handpicked-title">热门话题</h2>
            <div>
              <ul class="handpicked-list">
                <li class="handpicked-item">
                  <img src="../../common/image/banner.jpg" alt="">
                  <div>
                    <p>打工？这辈子都是不可能打工的啦！打工？这辈子都是不可能打工的啦！</p>
                    <div class="bottom">
                      <div class="left">
                        <img src="../../common/image/banner.jpg" alt="">
                        <span>哈哈哈哈</span>
                      </div>
                      <div class="right">
                        <i class="el-icon-star-off"></i>
                        <span>666</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="handpicked-item">
                  <img src="../../common/image/banner.jpg" alt="">
                  <div>
                    <p>打工？这辈子都是不可能打工的啦！打工？这辈子都是不可能打工的啦！</p>
                    <div class="bottom">
                      <div class="left">
                        <img src="../../common/image/banner.jpg" alt="">
                        <span class="name">哈哈哈哈</span>
                      </div>
                      <div class="right">
                        <i class="el-icon-star-off"></i>
                        <span>666</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Mock from 'mockjs'

export default {
  data () {
    return {
      topicLabel: ['#我想上精选', '#健身日志', '#跑步', '#哈哈哈哈', '#开始减肥']
    }
  },
  mounted () {
    this.hotList = Mock.mock({
      'list|1-10': [{
        'id|+1': 1
      }]
    })
    console.log(this.hosList)
  },
  components: {
    Scroll
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
          background: url('../../common/image/banner.jpg') no-repeat;
          background-size: cover;
          img{
            width: 100%
          }
        }
        .right{
          flex: 1;
          margin-left: 20px;
          .title{
            font-size: 16px;
          }
          .disc{
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
          .lable-list:not(:first-child){
              // margin-left: 10px;
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
        .handpicked-item{
          flex: 0 0 48%;
          overflow: hidden;
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
}
</style>
