<template>
  <div class="todo-item">
    <input type="checkbox">
    {{todo}} 
  </div>
</template>

<script>
export default {
  props: ['todo']
  
}
</script>

<style lang="scss">
.todo-item {
  padding: 8px 16px;
  border-bottom: 1px solid rgb(179, 179, 179);
}
</style>