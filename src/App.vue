<template>
  <div id="app">

    <header class="header">
      <h1>Заметки</h1>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('GET_STORAGE')
  }
  
}
</script>

<style lang="scss">

.header {
  padding: 16px;
  background-color: rgb(31, 30, 30);
  color: rgb(236, 236, 236);
  text-align: center;
}




/* кастомный нормалайз */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

li {
  list-style-type: none;
}

ul {
  margin-left: 0;
  padding-left: 0;
}

button {
  border: none;
  background-color: white;
  outline: none;

  &:active {
    box-shadow: inset 0 0 6px 0 rgb(88, 88, 88);
  }
}

input {
  border: none;
  outline: none;
}

a:link, a:visited, a:active, a:hover  { 
  text-decoration: none; /* Убирает подчеркивание для ссылок */;
  color: hsl(240, 100%, 57%);
} 
a:hover {
  color: hsl(240, 100%, 73%);
}

.block-without-scroll {
  /* прячем боковой скроллбар */
   -ms-overflow-style: none; /* ie 10+ */
   overflow: -moz-scrollbars-none;/* FF */

  /* хром, сафари */
  &::-webkit-scrollbar { width: 0; }
}


// глобальные классы

.btn {
  padding: 5px 30px;
  border-radius: 4px;
  background-color: lightgray;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 0 4px 2px darkgray;
    border-radius: 4px;
  }
    
  &__red {    
    background-color: rgb(231, 41, 41);
  } 

  &__green {
    background: lightgreen;
  }

  &__blue {
    background-color: rgb(0, 191, 255);
  }

  &__undo-redo {
    position: fixed;
    right: 5px;
  }

  &__to-main {
    border-radius: 100%;
    padding: 0;
    font-size: 50px;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    position: fixed;
    top: 0;
    left: 16px;

    &:active {
      box-shadow: none;
    }
  }
}

.input-radius {
  padding: 5px 16px;
  border-radius: 15px;
}



  

</style>
