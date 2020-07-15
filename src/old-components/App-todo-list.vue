<template>
  <div class="todo">

    <h2 class="todo__title">
      <span v-if="isChange">{{task.title}}</span>
      <span v-else><input type="text" class="input-radius" v-model="task.title"></span>

      <button class="btn" @click="changeTitle">
        <span v-if="isChange">change</span>
        <span v-else>Save</span>
      </button>
      
    </h2>

    <ul class="todo__list block-without-scroll">      
      <app-todo-item
        class="todo__item"
        v-for="(todo, index) in task.todo"
        :key="index" 
        :todoInfo="todo"
        :id="id"
        :thisIndex="index"
      ></app-todo-item>
      <li class="todo__item" v-if="!task.todo.length">No items</li>      
    </ul>   

    <form class="todo__item todo__form">
        <input class="todo__input input-radius" type="text" v-model.trim="newTodo">
        <button class="todo__add"
                @click.prevent="pushToTodo"
        >Add</button>
    </form>

  </div>
</template>

<script>
import AppTodoItem from './App-todo-item'

import {mapActions} from 'vuex';

export default {
  components: {
    AppTodoItem
  },
  props: ['id'],

  data() {
    return {
      isChange: true,
      newTodo: ''
    }
  },
  computed: {
    task() {
      return this.$store.getters['ID_TASKS'](this.$route.params.id)      
    }
  },

  methods: {
    ...mapActions([
      'ADD_NEW_TODO'
    ]),
    pushToTodo() {
      if (!this.newTodo) return false;

      this.ADD_NEW_TODO({
        todoItem: this.newTodo,
        id: this.id
      });

      this.newTodo = '';
    },

    changeTitle() {
      if (!this.isChange) {
        this.$store.dispatch('CHANGE_TITLE', {
          id: this.id,
          title: this.task.title
        })
      }
      this.isChange = !this.isChange
    }
  },

  // при перезагрузке обнавляет данные из localStorage
  created() {
    this.$store.dispatch('GET_STORAGE')
  }
  
}
</script>

<style lang="scss">
.todo {
  width: 80%;
  margin: 0 auto;

  &__title {
    text-align: center;
    padding: 14.5px 0;
    margin: 16px 0 0;
    border-radius: 8px 8px 0 0;
    background-color: rgb(93, 93, 93);
    color: rgb(255, 255, 255);
  }

  &__list {
    margin: 0 auto;
    background-color: rgb(230, 230, 230);
    height: calc(100vh - 57px - 65px - 32px );
    overflow-y: auto;
  }

  &__item {
    padding: 18px 30px;
    border-bottom: 1px solid lightgray;
  }

  &__no-items {
    text-align: center;
  }

  &__form {
    background-color: rgb(93, 93, 93);
    border-radius: 0 0 8px 8px;
    padding: 20px 30px;
    border: none;
  }

  &__input {
    width: 300px;
  }

  &__add {
    padding: 5px 16px;
    border-radius: 5px;
    background-color: rgb(140, 255, 140);
  }
}
</style>