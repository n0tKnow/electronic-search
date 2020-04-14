import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/result',
    name: 'result',
    component: ()=>import('../views/SearchResult.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
