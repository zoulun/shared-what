import Vue from 'vue'
import Router from 'vue-router'
import MovementCircle from 'components/movement-circle/movement-circle'
import Found from 'components/found/found'
import Movement from 'components/movement/movement'
import DryGoods from 'components/dry-goods/dry-goods'
import UserCenter from 'components/user/user'
import Hot from 'components/hot/hot'
import Focus from 'components/focus/focus'
import Live from 'components/live/live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movement-circle/hot'
    },
    {
      path: '/movement-circle',
      component: MovementCircle,
      children: [
        {
          path: 'hot',
          component: Hot
        },
        {
          path: 'focus',
          component: Focus
        },
        {
          path: 'live',
          component: Live
        }
      ]
    },
    {
      path: '/found',
      component: Found
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
