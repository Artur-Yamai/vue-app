import Vue from 'vue'
import VueRouter from 'vue-router'

import vTaskList from '../components/tasks/v-task-list'
import vTodoList from '../components/todos/v-todo-list'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/list',
      component: vTaskList,
      name: 'task-list'
    },
    {
      path: '/list/:id',
      component: vTodoList,
      name: 'todo-list',
      props: true
    },
    {
      path: '*',
      redirect: { name: 'task-list' }
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
