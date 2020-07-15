<template>
  <div>
    <div class="panel-control">
      <form @submit.prevent="addTask">
        <input type="text" class="input-radius" v-model="taskTitle">
        <button class="btn btn__green" @click.prevent="addTask">Добавить</button>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: ''
    }
  },

  methods: {

    addTask() {
      if (this.taskTitle) {
        const taskItem = {
          id: String(+new Date),
          title: this.taskTitle,
          todoList: []
        }
        this.$store.dispatch('ADD_TASK', taskItem);
        this.taskTitle = '';
      }
    }

  }
  
}
</script>

<style lang="scss">

.panel-control {
  width: 50%;
  margin: 0 auto;
  padding: 16px 24px;
  background-color: rgb(31, 30, 30);
  border-radius: 0 0 8px 8px;
}
  
</style>