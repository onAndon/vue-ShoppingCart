import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/home/IndexPage.vue'
import Hot from '@/pages/hot/IndexPage.vue'

import Mine from '@/pages/mine/IndexPage.vue'

/*购物车*/
import Cart from '@/pages/cart/IndexPage.vue'
import RedPacket from '@/pages/cart/redPacket.vue'
export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      alias: '/',
      component: Home
    },
    {
        name: 'hot',
        path: '/hot',
        component: Hot
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart,
        children:[
        	{
        		name:'redpacket',
        		path:'redpacket',
           	props:true,
        		component:RedPacket
        	}
        ]
    },
    {
        name: 'mine',
        path: '/mine',
        component: Mine
    },
    {
        path: '**',
        redirect: '/home'
    }

  ]
})
