<template>
  <div class="task-list">
    <v-task-item v-for="task in allTasks"
                 :key="task.id"
                 :task="task"
    ></v-task-item>
  </div>
</template>

<script>
import vTaskItem from './v-task-item';
import {mapGetters} from 'vuex';

export default {
  components: {
    vTaskItem
  },

  computed: {
    ...mapGetters(['allTasks'])
  }
}
</script>

<style lang="scss">

.task-list {
  background-color: lightgray;
  width: 50%;
  height: calc(100vh - 69px - 57px - 32px); // высота = (высота экрана) - (высота хедера) - (высота панели) - (все марджины)
  margin: 16px auto 0;
}
  
</style>