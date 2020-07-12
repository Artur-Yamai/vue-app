<template>
  <div class="todo">
    {{data}}
    <h2 class="todo__title">{{data.title}}</h2>
    <ul>
      <li v-for="(todo, index) in data.todo"
          :key="index"
      >{{todo}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data']
  
}
</script>

<style lang="scss">
.todo {

  &__title {
    text-align: center;
  }
}
</style>