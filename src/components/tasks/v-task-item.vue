<template>
  <div class="task-title">
    <v-popup-delete v-if="isDelete"
                    @answer="answer"
    ></v-popup-delete>


      <span>{{task.title}}</span>
      <button class="btn btn__red" 
              @click="showPopup"
      >удалить</button>
  </div>
</template>

<script>
import vPopupDelete from '../popups/v-popup-delete'
export default {
  props: ['task'],
  components: {
    vPopupDelete
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