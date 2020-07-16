<template>
  <div class="fade">

    <div class="popup popup-delete">
      <slot></slot>
      <div class="popup__buttons">
        <div type="submit" class="btn btn__green" @click="confirm">Да</div>
        <div type="submit" class="btn btn__red" @click="cancel">Нет</div>  
      </div>    
    </div>

  </div>
  
</template>

<script>
export default {
  
  methods: {

    // два следующих метода подтверждают (true) или отменяют (false) удаление таска 
    confirm() {
      this.$emit('answer', true)
    },

    cancel() {
      this.$emit('answer', false)
    }
  }

}
</script>

<style lang="scss">

.fade {
  position: absolute;
  background: rgba(0, 0, 0, 0.231);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.popup {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 250px;
  min-height: 100px;
  background-color: rgb(116, 146, 255);
  box-shadow: 0 0 16px 0 rgb(92, 128, 255);;
  top: 30vh;
  right: calc((100vw - 250px) / 2);
  z-index: 2;
  border-radius: 8px;

  &__title {
    text-align-last: center;
    margin: 8px;
  }

  &__buttons {
    display: flex;
    justify-content: space-around;
  }

}
</style>