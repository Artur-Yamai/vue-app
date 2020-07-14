<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  }
  
}
</script>

<style lang="scss">


/* мой нормалайз */

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
    
  &__delete {    
    background-color: rgb(231, 41, 41);
  } 


}

.input-radius {
  padding: 5px 16px;
  border-radius: 15px;
  margin-right: 15px;
}

  

</style>
