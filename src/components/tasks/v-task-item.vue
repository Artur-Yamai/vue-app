<template>
  <div class="task-title">
    <v-popup v-if="isDelete"
             @answer="answer"
    >
      <h4 class="popup__title">Точно хотите удалить?</h4>
    </v-popup>

      <router-link :to="{name: 'todo-list', params: {id: task.id}}">{{task.title}}</router-link>

      <button class="btn btn__red" 
              @click="showPopup"
      >удалить</button>
  </div>
</template>

<script>
import vPopup from '../v-popup'
export default {
  props: ['task'],
  components: {
    vPopup
  },

  data() {
    return {
      isDelete: false
    }
  },

  
  methods: {

    // метод, вызывающая popup
    showPopup() {
      this.isDelete = !this.isDelete
    },

    
    answer(receivedAnswer) {
      if (receivedAnswer) {
        this.$store.dispatch('REMOVE_TASK', this.task.id)
      }

      this.isDelete = !this.isDelete
    }


  }
  
}
</script>

<style lang="scss">

.task-title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid gray;
}

</style>