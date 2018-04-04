import Vue from 'vue'
import Router from 'vue-router'
import MovementCircle from 'components/movement-circle/movement-circle'
import Found from 'components/found/found'
import Movement from 'components/movement/movement'
import DryGoods from 'components/dry-goods/dry-goods'
import UserCenter from 'components/user/user'
import handpickedDetail from 'components/handpicked-detail/handpicked-detail'
import movementMap from 'components/movement-map/movement-map'
// import Hot from 'components/hot/hot'
// import Focus from 'components/focus/focus'
// import Live from 'components/live/live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movement-circle'
    },
    {
      path: '/movement-circle',
      component: MovementCircle,
      children: [
        {
          path: ':id',
          component: handpickedDetail
        }
        // {
        //   path: 'focus',
        //   component: Focus
        // },
        // {
        //   path: 'live',
        //   component: Live
        // }
      ]
    },
    {
      path: '/found',
      component: Found,
      children: [
        {
          path: 'map',
          component: movementMap
        }
      ]
    },
    {
      path: '/movement',
      component: Movement
    },
    {
      path: '/dry-goods',
      component: DryGoods
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
