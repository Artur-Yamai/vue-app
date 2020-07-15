<template>
  <div>
    <v-task-list></v-task-list>

    <v-add-panel></v-add-panel>

  </div>
</template>

<script>
import vTaskList from './tasks/v-task-list'
import vAddPanel from './tasks/v-add-panel'

export default {
  components: {
    vTaskList,
    vAddPanel
  }
  
}
</script>

<style lang="scss">
  
</style>