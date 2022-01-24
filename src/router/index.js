import Vue from 'vue'
import VueRouter from 'vue-router'
import InputPanel from '../views/InputPanel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'InputPanel',
    component: InputPanel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
