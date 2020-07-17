<template>
<div class="title-task">
  <!-- попап для подтверждени удаления таска-->
  <v-popup @answer="formDelete" v-if="isPopupFromDelete">
    <h4 class="popup__title">хотите удалить?</h4>
  </v-popup>

  <!-- попап для отмены изменений в тайтле таска -->
  <v-popup @answer="fromCancelChange" v-if="isCancelChange">
    <h4 class="popup__title">хотите отменить изменение?</h4>
  </v-popup>

  <h3 class="" v-if="!isChangeTitle">
    <span class="title-task__change"
          @click="clickFromChange"
    >&#9998;</span>      
    <span class="title-task__text">{{title}}</span>
    <span class="title-task__remove" @click="isPopupFromDelete = !isPopupFromDelete">&#10006;</span>
  </h3>

  <div class="title-task__change-block"
       v-else      
  >
    <button class="title-task__cancel btn btn__red"
            @click="isCancelChange = !isCancelChange"
    >Отменить</button>
    <input class="title-task__input input-radius" 
           type="text"
           v-model="changedTitle">
    <button class="title-task__save btn btn__green"
            @click="saveChange"
    >Сохранить</button>
  </div>

</div>
</template>

<script>
import vPopup from '../v-popup';

export default {
  props: ['title', 'id'],
  components: {
    vPopup
  },

  data() {
    return {
      isPopupFromDelete: false,
      isChangeTitle: false,
      isCancelChange: false,
      changedTitle: this.title
    }
  },

  methods: {

    formDelete(bool) {
      if (bool) {
        this.$store.dispatch('REMOVE_TASK', this.id);
        this.$router.push({name: 'task-list'});
        console.log(1);
      }
      this.isPopupFromDelete = !this.isPopupFromDelete;      
    },

    saveChange() {
      this.$store.dispatch('CHANGE_TASK_TITLE', {
        id: this.id,
        newTitle: this.changedTitle
      });
      this.isChangeTitle = !this.isChangeTitle;  
    },

    clickFromChange() {
      this.isChangeTitle = !this.isChangedTitle;
    },

    fromCancelChange(bool) {
      if (bool) {
        this.isChangeTitle = !this.isChangeTitle;
      }
      this.isCancelChange = !this.isCancelChange;
      this.changedTitle = this.title
    }
  }
  
}
</script>

<style lang="scss">
  .title-task {
  padding: 16px;
  text-align: center;
  background-color: gray;
  border-bottom: 1px solid black;
  margin: 16px auto 0;
  width: 50%;

  &__change {
    color: lightseagreen;
    cursor: pointer;
  }

  &__input {
    margin: 0 8px;
  }

  &__text {
    margin: 0 8px;
  }

  &__remove {
    color: tomato;
    cursor: pointer;
  }

  &__change-block {
    width: 100%;
  }
}
</style>