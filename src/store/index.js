import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [],
    // сохраняет последнее изменение заголовка таска
    snapshot: ''
  },
  
  getters: {
    allTasks: state => state.taskList,

    getTaskFromId: state => id => state.taskList.find(task => task.id === id)
  },

  mutations: {
    // правило:
    // task = state.taskList.find(task => task.id === taskID)
    // дублируется несколько раз, только потому, что иначе VueCLI выдавал ошибку в консоль, 
    // и не давал нормально передавать данные из компонентов.
    // я пытался исправить нормально, но в основном, все получалось на костылях
    // в любом случае еще продолжу искать решение.
    addTask(state, newTask) {
      state.taskList.push({
            id: String(+new Date),
            title: newTask,
            todoList: []
          })
    },

    addTodo(state, {newTodo, taskID}) {
      let task = state.taskList.find(task => task.id === taskID);

      task.todoList.push({
        todo: newTodo,
        done: false
      });
    },

    removeTask(state, id) {
      let task = state.taskList.find(task => task.id === id);
      let index = state.taskList.indexOf(task);
      state.taskList.splice(index, 1)
    },

    removeTodo(state, {taskID, todoIndex}) {
      let task = state.taskList.find(task => task.id === taskID);
      task.todoList.splice(todoIndex, 1);
    },

    changeTaskTitle(state, {id, newTitle}) {
      let task = state.taskList.find(task => task.id === id);

      // сохраняет предыдущее название изменяемого таска
      // в отдельной переменной
      state.snapshot = task.title;

      // обновляет заголовок
      task.title = newTitle;
    },

    checkedTodo(state, {taskID, done, todoIndex}) {
      let task = state.taskList.find(task => task.id === taskID);
      task.todoList[todoIndex].done = done;
    },

    newTodoText(state, {taskID, todoIndex, newText}) {
      let task = state.taskList.find(task => task.id === taskID);
      task.todoList[todoIndex].todo = newText;
    },

    clearSnapshot(state) {
      state.snapshot = '';
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

    CLEAR_SNAPSHOT({commit}) {
      commit('clearSnapshot');
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
