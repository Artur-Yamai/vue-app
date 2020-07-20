<template>
  <div class="task-title">
    <v-popup v-if="isDelete"
             @answer="answerToDelete"
    >
      <h4 class="popup__title">Точно хотите удалить?</h4>
    </v-popup>

    <span class="task-title__text">
      <router-link :to="{name: 'todo-list', params: {id: task.id}}">{{task.title}}</router-link>
      <sup class="task-title__abbreviated-list">
        {{abbreviatedList}}
      </sup>
    </span>      

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
      // bool для отображения попапа
      isDelete: false
    }
  },

  computed: {

    // выводит подпись с несколькими пунктами todo под таском
    abbreviatedList() {
      let text = '';
      
      for (let i in this.task.todoList) {
        text += this.task.todoList[i].todo + ' ';
        if (i > 2) {
          return `${text}...`;
        } else if (i === 2) {
          return text;
        } 
      }

      return text;
    }
  },
  
  methods: {

    // вызывает popup
    showPopup() {
      this.isDelete = true;
    },
    
    // удаляет таск, в случае подтверждения действия
    answerToDelete(receivedAnswer) {
      if (receivedAnswer) {
        this.$store.dispatch('REMOVE_TASK', this.task.id)
      }

      this.isDelete = false;
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

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__abbreviated-list {
    font-size: 80%;
    color: lightslategray;
  }
}

</style>