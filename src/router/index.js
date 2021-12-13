import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Travel from '../views/Travel.vue'
import Travels from '../views/Travels.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Travel/:id',
    name:'Travel',
    component:Travel
  },
  {
    path:'/Travels',
    name:'Travels',
    component:Travels
  }
  ,
  {
    path:'/signup',
    name:'signup',
    component:Signup
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
