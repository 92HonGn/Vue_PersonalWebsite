import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Goods from '../views/Goods.vue'
import Live from '../views/Live.vue'
import Fans from '../views/Fans.vue'
import Album from '../views/Album.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/album',
    name: 'album',
    component: Album
  },
  {
    path: '/fans',
    name: 'fans',
    component: Fans
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
]

const router = new VueRouter({
  routes
})

export default router
