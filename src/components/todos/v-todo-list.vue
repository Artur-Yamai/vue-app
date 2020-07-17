<template>
  <div>   
    {{$store.state.taskList}}
    <v-task-title :title="thisTask.title"
                   :id="id"
    ></v-task-title>
    <div class="todo-list block-without-scroll">      
      <p class="todo-list__empty-todos"
         v-if="!thisTask.todoList.length"
      >Пока здесь ничего нет</p>
      <v-todo-item v-else
                   v-for="(todo, i) in thisTask.todoList"
                   :key="i"
                   :todo="todo"
                   :todoIndex="i"
                   :id="id"
      ></v-todo-item>

    </div>

    <v-add-panel @inputValue="inputValue"></v-add-panel>
  </div>
</template>

<script>
import vTaskTitle from './v-task-title';
import vTodoItem from './v-todo-item';
import vAddPanel from '../v-add-panel';

export default {
  props: ['id'],

  components: {
    vTaskTitle,
    vTodoItem,
    vAddPanel
  },

  computed: {

    // находит таск в сторе
    thisTask() {
      return this.$store.getters['getTaskFromId'](this.id)
    }
  },

  methods: {
    // этот метод добавляет новый пункт todo
    inputValue(val) {
      if (val) {
        this.$store.dispatch('ADD_TODO', {
          id: this.id,
          newTodo: val
        })
      }
      
    }
  }
  
}
</script>

<style lang="scss">

.title-task {
  padding: 16px;
  text-align: center;
  background-color: gray;
  border-bottom: 1px solid black;
  margin: 16px auto 0;
  width: 50%;

  &__change {
    color: lightseagreen;
    cursor: pointer;
  }

  &__input {
    margin: 0 8px;
  }

  &__text {
    margin: 0 8px;
  }

  &__remove {
    color: tomato;
    cursor: pointer;
  }

  &__change-blick {
    width: 100%;
    padding: 16px;
    background-color: red;
  }
}

.todo-list {
  margin: 0 auto;
  height: calc(100vh - (69px + 55px + 57px + 32px)); // высота = (высота экрана) - (высота хедера + высота заголовка + высота панели + все марджины)
  width: 50%;
  background-color: lightgray;
  overflow: scroll;

  &__empty-todos{
    padding: 16px;
    background-color: darkgray;
  }
}
</style>