import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
    ],

    popup: {
      show: false,
      idFromDelete: 0
    }
  },
  
  getters: {
    TASKS: state => state.tasks,

    ID_TASKS: state => id => state.tasks.find(task => task.id === id),

    POPUP: state => state.popup
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
    },

    togglePopup(state, id) {
      state.popup.show = !state.popup.show;
        state.popup.idFromDelete = id;
      
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

    REMOVE_TASK({state, commit, dispatch}) {
      commit('removeTask', state.popup.idFromDelete);
      dispatch('SAVE_STORAGE');
    },

    TOGGLE_POPUP({commit}, payLoad) {
      commit('togglePopup', payLoad);
    },

    // берет данные из localStorage, чтобы сохранить данные при перезагрузке
    GET_STORAGE({state}) {      
      if (!localStorage.allTask) {
        console.log(localStorage.allTask);
        return false;
      }
      
      state.tasks = JSON.parse(localStorage.allTask);
    },

    // сохраняет данные в localStorage
    SAVE_STORAGE({state}) {     
      let actualData = JSON.parse(JSON.stringify(state.tasks));
      localStorage.setItem('allTask', JSON.stringify(actualData));
    }
  }

})
