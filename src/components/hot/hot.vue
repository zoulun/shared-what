<template>
  <div class="hot-container">
    <div class="banner">
      <ul class="banner-list">
        <li class="">
          <img src="../../common/image/banner.jpg" alt="">
        </li>
      </ul>
      <div class="divider-line"></div>
    </div>
    <div class="topic">
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
    </div>
    <div class="activity">
      <h2>热门话题</h2>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.hot-container{
  position: relative;
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
        width: 100px;
        height: 100px;
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
          margin-top: 10px;
        }
        .participate{
          font-size: 12px;
          color: #ccc;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
