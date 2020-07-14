<template>
  <li :class="classDone">
    <input type="checkbox" 
           v-model="isChecked"
    >
    {{todoInfo}}
  </li>
</template>

<script>
export default {
  props: ['todoInfo'],
  data() {
    return {
      isChecked: false
    }
  },
  computed: {

    classDone() {
      return this.isChecked ? 'done' : false;
    }

  },
  methods: {

  }
  
}
</script>

<style lang="scss">
  .done {
    background-color: lightgreen;
  }
</style>