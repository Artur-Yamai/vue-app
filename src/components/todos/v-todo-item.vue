<template>
  <div class="todo-item" :class="classDone">
    <span class="todo-item__content">
      <input type="checkbox"
             v-model="checkedTodo"
             name="todoBlock"
             @click="checkedThisTodo"
      >
    {{todo.todo}} 
    </span>
    <button class="btn btn__red"
            @click.prevent="removeTodo"
    >Удалить</button>
    
  </div>
</template>

<script>
export default {
  props: ['todo', 'id', 'todoIndex'],

  data() {
    return {
      checkedTodo: this.todo.done
    }
  },

  computed: {
    classDone() {
      return this.checkedTodo ? 'done' : false;
    }
  },

  methods: {
    removeTodo() {
      this.$store.dispatch('REMOVE_TODO', {
        taskID: this.id,
        todoIndex: this.todoIndex
      })
    },

    checkedThisTodo() {
      this.$store.dispatch('CHECKED_TODO', {
        done: !this.checkedTodo,
        taskID: this.id,
        todoIndex: this.todoIndex
      })
    }
  }
  
}
</script>

<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid rgb(179, 179, 179);
  vertical-align: center;

  &__content {
    // display: flex;

  }
}

.done {
  background-color: rgba(0, 255, 0, 0.748);
}
</style>