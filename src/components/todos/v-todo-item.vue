<template>
  <div class="todo-item" :class="classDone">
    <span class="todo-item__content">
    <p class="todo-item__text" v-if="!isChangeTodo">
      <!-- пытался в v-model засунуть переменную, -->
      <!-- в котороый хранится состояние done данного todo, -->
      <!-- но из-за этого динамически не обнавляется класс при удалении пунктов. -->
      <!-- в данном случае все работает и не выдает ошибку,  -->
      <!-- но это (какбудто бы) двунапавленная связь со стором, которая не приветствуется -->
      <!-- магия какая-то, но другого, более адекватного решения не нашел. -->
      <!-- Если вы его знаете, то буду очень рад узнать подробнее-->
      <input type="checkbox"
             v-model="todo.done"
             name="todoBlock"
             @click="checkedThisTodo"
      >      
      {{todo.todo}}
      <button class="todo-item__changeTodo btn btn__blue"
            @click.prevent="changeTodoClick"  
      >изменить</button>
    </p>


    <p v-else class="todo-item__new-text">
      <input class="input-radius" type="text" v-model="newTodoText">
      <button class="todo-item__changeTodo btn btn__blue"
              @click.prevent="saveNewTodoText"
      >Сохранить</button>
    </p>
    

    
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
      isChangeTodo: false,
      newTodoText: this.todo.todo
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
    },

    changeTodoClick() {
      this.isChangeTodo = !this.isChangeTodo;
    },

    saveNewTodoText() {
      this.$store.dispatch('NEW_TODO_TEXT', {
        newText: this.newTodoText,
        taskID: this.id,
        todoIndex: this.todoIndex
      });
      this.isChangeTodo = !this.isChangeTodo;
    }
  }
  
}
</script>

<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid rgb(179, 179, 179);
  vertical-align: center;

  &__text {
    margin: 0 4px;
  }

  &__changeTodo {
    margin: 0 4px;
  }
}

.done {
  background-color: rgba(0, 255, 0, 0.748);
}
</style>