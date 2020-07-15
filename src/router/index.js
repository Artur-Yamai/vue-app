import Vue from 'vue'
import VueRouter from 'vue-router'

import vHome from '../components/v-home'
// import todo from '../components/App-todo-list'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/list',
      component: vHome,
      name: 'v-home'
    },
    // {
    //   path: '/list/:id',
    //   component: todo,
    //   name: 'todo',
    //   props: true
    // },
    {
      path: '*',
      redirect: { name: 'v-home' }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
