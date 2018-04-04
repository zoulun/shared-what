<template>
  <div>
    <div class="search-c">
      <search-link></search-link>
    </div>
    <div class="found">
      <scroll class="found-scroll">
        <div>
          <ul class="found-list">
            <li v-for="(item, index) in foundData" :key="index" class="found-item" @click="selectItem(item.link)">
              <div class="text-box">
                <h2>{{item.title}}</h2>
                <p class="desc">{{item.desc}}</p>
              </div>
              <div class="iamge-box">
                <img :src="item.foundImage" alt="">
              </div>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchLink from 'base/search-link/search-link'
import Scroll from 'base/scroll/scroll'
import {getFound} from 'api/movement-circle'

export default {
  data () {
    return {
      foundData: []
    }
  },
  created () {
    this._getFound()
  },
  methods: {
    _getFound () {
      getFound().then((res) => {
        this.foundData = res.data
        // let length = this.foundData.length
        this.foundData[6].link = '/found/map'
        console.log(res)
      })
    },
    selectItem (link) {
      if (link) {
        this.$router.push({
          path: link
        })
      }
    }
  },

  components: {
    Scroll,
    SearchLink
  }
}
</script>

<style scoped lang="less" type="text/less">
.search-c{
  padding: 20px 20px 0 20px;
}
.found{
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 50px;
  .found-scroll{
    height: 100%;
    overflow: hidden;
    .found-item::after{
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      left: 20px;
      right: 10px;
      bottom: 0;
      background: #eee;
    }
    .found-item{
      display: flex;
      box-sizing: border-box;
      position: relative;
      padding: 15px 10px 15px 20px;
      .text-box{
        flex: 1;
        padding: 25px 10px 0 0;
        box-sizing: border-box;
        .desc{
          margin-top: 5px;
          font-size: 12px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .iamge-box{
        font-size: 0;
        img{
          width: 90px;
          height: 90px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
