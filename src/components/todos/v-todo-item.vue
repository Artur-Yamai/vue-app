<template>
  <div class="todo-item" :class="classDone">
    <span class="todo-item__content">
    <p class="todo-item__text" v-if="!isChangeTodo">
      <input type="checkbox"
             v-model="todoDone"
             name="todoBlock"
             @click="checkedThisTodo"
      >      
      {{todo.todo}}
      <button class="todo-item__changeTodo btn btn__blue"
            @click.prevent="changeTodoClick"  
      >изменить</button>
    </p>

    <!-- поле для изменения текста таска -->
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
      newTodoText: this.todo.todo,
      todoDone: this.todo.done
    }
  },

  computed: {
    // добавляет класс,если пункт todo отмечен чекбоксом
    classDone() {
      return this.todo.done ? 'done' : '';
    }
  },

  methods: {
    // удаляет выбранный todo
    removeTodo() {
      this.$store.dispatch('REMOVE_TODO', {
        taskID: this.id,
        todoIndex: this.todoIndex
      })
    },

    // отмчечает выбранный todo как выолненный
    // а так же отмечает это в store
    checkedThisTodo() {
      this.$store.dispatch('CHECKED_TODO', {
        done: !this.todoDone,
        taskID: this.id,
        todoIndex: this.todoIndex
      })
    },

    // выводит поле для изменения текста todo
    changeTodoClick() {
      this.isChangeTodo = !this.isChangeTodo;
    },

    // при изменении текста конкретного todo 
    // сохраняет изменение и возвращает чукбокс и сам текст
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