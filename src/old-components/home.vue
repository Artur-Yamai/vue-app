<template>
  <div class="home">

    <app-popup class="popup" v-if="isShowPopup"></app-popup>

    <header class="header">
      <h1 class="header__title">Task List</h1>
    </header>

    <app-task-list></app-task-list>

    <app-panel-control></app-panel-control>
    
  </div>
</template>

<script>
import AppPopup from './App-popup'
import AppTaskList from './App-task-list';
import AppPanelControl from './App-panel-control';

export default {
  name: 'home',
  components: {
    AppTaskList,
    AppPanelControl,
    AppPopup
  },

  computed: {
    isShowPopup() {
      return this.$store.getters['POPUP'].show;
    }
  },

  // при перезагрузке обнавляет данные из localStorage
  created() {
    this.$store.dispatch('GET_STORAGE')
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

.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

@media (max-width: 640px) {


}
</style>
