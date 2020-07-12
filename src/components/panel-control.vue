<template>
  <div class="panel-control">

    <form class="add-task"
          @submit.prevent="pushTask">
      <input class="add-task__input" type="text" placeholder="Input your task" v-model.trim="inputValue">
      <button class="add-task__btn"
              @click.prevent="pushTask"
      >+</button>
    </form>

    <div class="remove-task">
      <button class="remove-task__delete">Delete</button>
    </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapActions([
      'ADD_NEW_TASK'
    ]),
    pushTask() {
      if (!this.inputValue) return false;

      let newTask = {
        title: this.inputValue,
        todo: [],
        isSelected: false,
        isComplete: false,
        id: +new Date()
      };

      this.ADD_NEW_TASK(newTask);

      this.inputValue = '';
    }
  }
  
}
</script>

<style lang="scss">
  .panel-control {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 25px;
    width: 80%;
    border-radius: 0 0 8px 8px;
    background-color: rgb(56, 56, 56);
  }

  .add-task {
    border-radius: 15px;

    &__input {
      padding: 5px 15px;
      border-radius: 15px 0 0 15px;
      width: 450px;

      &:focus {
      box-shadow: 0 0 8px 0 dodgerblue;
      }

    }
    
    &__btn {
      padding: 5px 10px;
      border-radius: 0 15px 15px 0;
      border-left: 1px solid gray;
      cursor: pointer;

      

    }
  }

  .remove-task {
    
    &__delete {
      padding: 5px 30px;
      border-radius: 4px;
      background-color: rgb(231, 41, 41);
      }
  }

  
</style>