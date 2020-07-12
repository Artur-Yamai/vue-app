<template>
  <div class="home">
    <header class="header">
      <h1 class="header__title">Task List</h1>
    </header>

    <task-list></task-list>

    <panel-control></panel-control>
    
  </div>
</template>

<script>
import taskList from './task-list';
import panelControl from './panel-control';

export default {
  name: 'home',
  components: {
    taskList,
    panelControl
  }
}
</script>


<style lang="scss">

.header {
  margin: 16px auto 0;
  width: 80%;
  border-radius: 8px 8px 0 0;
  background-color: rgb(56, 56, 56);

  &__title {
    text-align: center;
    padding: 10px 0;
    color: rgb(241, 241, 241)
  }
}

@media (max-width: 640px) {


}
</style>
