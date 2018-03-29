import Vue from 'vue'
import Router from 'vue-router'
import MovementCircle from 'components/movement-circle/movement-circle'
import Found from 'components/found/found'
import Movement from 'components/movement/movement'
import DryGoods from 'components/dry-goods/dry-goods'
import UserCenter from 'components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movement-circle'
    },
    {
      path: '/movement-circle',
      component: MovementCircle
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
