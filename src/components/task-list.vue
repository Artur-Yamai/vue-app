<template>
  <ul class="task-list block-without-scroll">
    <task v-for="(task, index) in TASKS"
          :key="index"
          :index="index"
          :task='task'
    ></task>
  </ul>
</template>

<script>
import task from './task'
import {mapGetters} from 'vuex'

export default {
  components: {
    task
  },
  computed: {
    ...mapGetters([
      'TASKS'
    ])
  }
}
</script>

<style lang="scss">
.task-list {
  width: 80%;
  height: calc(100vh - 57px - 65px - 64px);; // (высота таск листа) = (высота экрана) - (высота хедера) - (высота футера) - (все марджины) 
  overflow-y: auto;
  margin: 16px auto;
  background-color: rgb(230, 230, 230);

  

}

@media (max-width: 600px) {

  .task-list {
    width: 100%;
  }

}
</style>