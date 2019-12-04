import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path:"/",
  redirect:"/massge"
},
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path: '/massge',
      name: 'massge',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/massge.vue')
    },{
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/mine.vue')
    },{
      path: '/house',
      name: 'house',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/house.vue')
    }]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
