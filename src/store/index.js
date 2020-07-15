import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [
    ]
  },
  
  getters: {
    allTasks: state => state.taskList,

    getTaskFromId: state => id => state.taskList.find(task => task.id === id)
  },

  mutations: {

    addTask(state, newTask) {
      state.taskList.push(newTask)
    },

    removeTask(state, id) {
      const task = state.taskList.find(task => task.id === id);
      const index = state.taskList.indexOf(task);
      state.taskList.splice(index, 1)
    }
      
  },

  actions: {

    ADD_TASK({commit, dispatch}, payLoad) {
      commit('addTask', payLoad);
      dispatch('SAVE_STORAGE');
    },

    REMOVE_TASK({commit}, payLoad) {
      commit('removeTask', payLoad)
    },

    // берет данные из localStorage, чтобы сохранить всё при перезагрузке
    GET_STORAGE({state}) {      
      if (!localStorage.allTask) {
        return false;
      }
      
      state.taskList = JSON.parse(localStorage.allTask);
    },

    // сохраняет данные в localStorage
    SAVE_STORAGE({state}) {     
      let actualData = JSON.parse(JSON.stringify(state.taskList));
      localStorage.setItem('allTask', JSON.stringify(actualData));
    }
  }

})
