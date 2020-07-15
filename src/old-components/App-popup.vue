<template>
  <div class="fade">
    <div class="app-popup">

      <div class="app-popup__content" >You confirm?</div>
      <div class="app-popup__footer">
        <button class="btn" @click="remove">Yes</button>
        <button class="btn" @click="close">No</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch('TOGGLE_POPUP')
    },
    remove() {
      this.$store.dispatch('REMOVE_TASK')
      this.$store.dispatch('TOGGLE_POPUP')
    }
  }
  
}
</script>

<style lang="scss">
.fade {
  z-index: 1;
}

.app-popup {
  background-color: rgb(116, 146, 255);
  position: fixed;
  top: 75px;
  padding: 16px;
  margin-left: calc((100vw - (250px + 32px)) / 2);
  width: 250px;
  border-radius: 5px;
  z-index: 2;
  box-shadow: 0 0 16px 0 rgb(92, 128, 255);;

  &__content {
    text-align: center;
    margin-bottom: 24px;

  }

  &__footer {
    display: flex;
    justify-content: space-around;
  }
}
  
</style>