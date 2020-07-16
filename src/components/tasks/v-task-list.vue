<template>
<div>
<div class="task-list block-without-scroll">
    <v-task-item v-for="task in allTasks"
                 :key="task.id"
                 :task="task"
    ></v-task-item>
  </div>
  <v-add-panel @inputValue="inputValue"></v-add-panel>
</div>
  
</template>

<script>
import vTaskItem from './v-task-item';
import vAddPanel from '../v-add-panel';

import {mapGetters} from 'vuex';

export default {
  components: {
    vTaskItem,
    vAddPanel
  },

  computed: {
    ...mapGetters(['allTasks'])
  },

  methods: {
    inputValue(val) {
      
      if (val) {
        const taskItem = {
          id: String(+new Date),
          title: val,
          todoList: []
        }
        this.$store.dispatch('ADD_TASK', taskItem);
      }
    }
  }
}
</script>

<style lang="scss">

.task-list {
  background-color: lightgray;
  width: 50%;
  height: calc(100vh - 69px - 57px - 32px); // высота = (высота экрана) - (высота хедера) - (высота панели) - (все марджины)
  margin: 16px auto 0;
  overflow-y: scroll;
}
  
</style>