<template>
  <div class="todo">
    {{id}}
    <h2 class="todo__title"></h2>

    <ul class="todo__list block-without-scroll"
    >      
      <li class="todo__item"
          v-for="(todo, ind) in task.todo"
          :key="ind"          
      >{{todo}}</li>
      <li class="todo__item" v-if="!task.todo.length">No items</li>      
    </ul>   

    <form class="todo__item todo__form">
        <input class="todo__input" type="text" v-model.trim="newTodo">
        <button class="todo__add"
                @click.prevent="pushToTodo"
        >Add</button>
    </form>

  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['id'],
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    task() {
      return this.$store.getters['task'](this.$route.params.id)      
    }
  },

  methods: {
    ...mapActions([
      'ADD_NEW_TODO'
    ]),
    pushToTodo() {
      console.log(this.newTodo);
      if (!this.newTodo) return false;

      this.ADD_NEW_TODO({
        todoItem: this.newTodo,
        id: this.id
      });

      this.newTodo = '';
    }
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
    padding: 5px 16px;
    border-radius: 15px;
    margin-right: 15px;
    width: 300px;
  }

  &__add {
    padding: 5px 16px;
    border-radius: 5px;
    background-color: rgb(140, 255, 140);
  }
}
</style>