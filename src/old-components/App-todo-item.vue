<template>
  <li class="todo-item" :class="classDone">
    <span>
      <input type="checkbox" 
             v-model="isChecked"
      >
      {{todoInfo}}
    </span>
    
    <button class="btn btn__delete" @click="deleteTodoItem">delete</button>
    
  </li>
</template>

<script>
export default {
  props: ['todoInfo', 'id', 'thisIndex'],
  data() {
    return {
      isChecked: false
    }
  },
  computed: {

    classDone() {
      return this.isChecked ? 'done' : false;
    }

  },
  methods: {
    deleteTodoItem() {
      this.$store.dispatch('REMOVE_TODO', {
        taskId: this.id,
        todoIndex: this.thisIndex
      })
    }
  }
  
}
</script>

<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
}

.done {
  background-color: lightgreen;
}
</style>