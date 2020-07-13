import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: '0',
        title: 'Task 1',
        todo: [
          'todo 1',
          'todo 2',
          'todo 3',
          'todo 4'
        ],
        isSelected: false,
        isComplete: false      
      }
    ]
  },
  
  getters: {
    TASKS: state => state.tasks,
    ID_TASKS: state => id => state.tasks.find(task => task.id === id)
  },

  mutations: {
    addNewTask(state, task) {
      state.tasks.push(task)
    },

    addNewTodo(state, {id, todoItem}) {
      const todo = state.tasks.find(task => task.id === id).todo;
      todo.push(todoItem);
    },

    removeTask(state, id) {
      const task = state.tasks.find(task => task.id === id);
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1)
    }

  },

  actions: {
    ADD_NEW_TASK({commit}, payLoad) {
      commit('addNewTask', payLoad)
    },

    ADD_NEW_TODO({commit}, payLoad) {
      commit('addNewTodo', payLoad);
    },

    REMOVE_TASK({commit}, payload) {
      commit('removeTask', payload)
    }
  },

  watch: {
    taskData: state => console.log(state)
  },

  modules: {
  }
})
