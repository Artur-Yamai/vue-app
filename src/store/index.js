import Vue from 'vue';
import Vuex from 'vuex';

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
      state.taskList.push({
            id: String(+new Date),
            title: newTask,
            todoList: []
          })
    },

    addTodo(state, {id, newTodo}) {
      // console.log(getters);
      const task = state.taskList.find(task => task.id === id);
      task.todoList.push({
        todo: newTodo,
        done: false
      });
    },

    removeTask(state, id) {
      const task = state.taskList.find(task => task.id === id);
      const index = state.taskList.indexOf(task);
      state.taskList.splice(index, 1)
    },

    removeTodo(state, {taskID, todoIndex}) {
      const task = state.taskList.find(task => task.id === taskID);
      task.todoList.splice(todoIndex, 1);
    },

    changeTaskTitle(state, {id, newTitle}) {
      const task = state.taskList.find(task => task.id === id);
      task.title = newTitle;
    },

    checkedTodo(state, {taskID, done, todoIndex}) {
      const task = state.taskList.find(task => task.id === taskID);
      task.todoList[todoIndex].done = done;
    },

    newTodoText(state, {taskID, todoIndex, newText}) {
      const task = state.taskList.find(task => task.id === taskID);
      task.todoList[todoIndex].todo = newText;
    }
    
  },

  actions: {

    ADD_TASK({commit, dispatch}, payLoad) {
      commit('addTask', payLoad);
      dispatch('SAVE_STORAGE');
    },

    ADD_TODO({commit, dispatch}, payLoad ) {
      commit('addTodo', payLoad);
      dispatch('SAVE_STORAGE');
    },

    REMOVE_TASK({commit, dispatch}, payLoad) {
      commit('removeTask', payLoad);
      dispatch('SAVE_STORAGE');
    },

    REMOVE_TODO({commit, dispatch}, payLoad) {
      commit('removeTodo', payLoad)
      dispatch('SAVE_STORAGE');
    },

    CHANGE_TASK_TITLE({commit, dispatch}, payLoad) {
      commit('changeTaskTitle', payLoad);
      dispatch('SAVE_STORAGE');
    },

    CHECKED_TODO({commit, dispatch}, payLoad) {
      commit('checkedTodo', payLoad);
      dispatch('SAVE_STORAGE');
    },

    NEW_TODO_TEXT({commit, dispatch}, payLoad) {
      commit('newTodoText', payLoad);
      dispatch('SAVE_STORAGE');

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
