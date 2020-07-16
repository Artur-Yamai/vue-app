<template>
  <div>
    <div class="panel-control">
      <form @submit.prevent="addTask">
        <input type="text" class="panel-control__input input-radius" v-model="value">
        <button class="btn btn__green" @click.prevent="getValue">Добавить</button>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },

  methods: {

    getValue() {
      this.$emit('inputValue', this.value);
      this.value = '';
    }

  }
  
}
</script>

<style lang="scss">

.panel-control {
  width: 50%;
  margin: 0 auto;
  padding: 16px 24px;
  background-color: rgb(31, 30, 30);
  border-radius: 0 0 8px 8px;

  &__input {
    margin-right: 16px;
  }
}
  
</style>