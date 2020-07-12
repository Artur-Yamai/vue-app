import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        title: 'Task 1',
        todo: [
          'todo 1',
          'todo 2',
          'todo 3',
          'todo 4'
        ],
        isSelected: false,
        isComplete: false
      },
      {
        title: 'Task 2',
        todo: [
          'todo 1',
          'todo 2',
          'todo 3',
          'todo 4'
        ],
        selected: false,
        isComplete: false
      },
      {
        title: 'Task 3',
        todo: [
          'todo 1',
          'todo 2',
          'todo 3',
          'todo 4'
        ],
        selected: false,
        isComplete: false
      }
    ]
  },
  
  getters: {
    TASKS(state) {
      return state.tasks;
    }
  },

  mutations: {
    addNewTask(state, task) {
      state.tasks.push(task)
    }

  },

  actions: {
    ADD_NEW_TASK({commit}, payLoad) {
      commit('addNewTask', payLoad)
    }
  },

  modules: {
  }
})
