<template>
  <div class="todo-item" :class="classDone">
    <span class="todo-item__content">
      <!-- пытался в v-model засунуть переменную, в котороый -->
      <!-- хранится состояние done данного todo, -->
      <!-- но из-за этого динамически не обнавляется класс при удалении пунктовю -->
      <!-- в данном случае все работает и не выдает ошибку,  -->
      <!-- но это двунапавленная связь которая не приветствуется -->
      <!-- магия какая-то, но другого, более адекватного регения не нашел. -->
      <!-- Если вы его знаете, то буду очень рад ее услышать -->
      <input type="checkbox"
             v-model="todo.done"
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
      return this.todo.done ? 'done' : '';
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
        done: !this.todo.done,
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
}

.done {
  background-color: rgba(0, 255, 0, 0.748);
}
</style>