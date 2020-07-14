import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
    ]
  },
  
  getters: {
    TASKS: state => state.tasks,
    ID_TASKS: state => id => state.tasks.find(task => task.id === id)
  },

  mutations: {
    addNewTask: (state, task) => {
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
    ADD_NEW_TASK({commit, dispatch}, payLoad) {
      commit('addNewTask', payLoad);
      dispatch('SAVE_STORAGE');
    },

    ADD_NEW_TODO({commit, dispatch}, payLoad) {
      commit('addNewTodo', payLoad);
      dispatch('SAVE_STORAGE');
    },

    REMOVE_TASK({commit, dispatch}, payload) {
      commit('removeTask', payload);
      dispatch('SAVE_STORAGE');
    },

    // берет данные из localStorage, чтобы сохранить данные при перезагрузке
    GET_STORAGE({state}) {
      state.tasks = JSON.parse(localStorage.getItem('allTask'))
    },

    // сохраняет данные в localStorage
    SAVE_STORAGE({state}) {     
      let actualData = JSON.parse(JSON.stringify(state.tasks))
      localStorage.setItem('allTask', JSON.stringify(actualData));
    }
  }

})
