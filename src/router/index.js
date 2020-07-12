import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home'
import todo from '../components/todo'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/list',
      component: home,
      name: 'home'
    },
    {
      path: '/list/task-:id',
      component: todo,
      name: 'todo',
      props: true
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
