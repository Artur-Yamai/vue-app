<template>
  <li class="task" :id="'checked' + index">
    <div class="task__label" >
      <router-link 
          :to="{name: 'todo', params: {id: task.id}}"
      >{{ task.title }}</router-link>
      
      <div class="remove-task">
      <button class="remove-task__delete">Delete</button>
    </div>             
    </div>
    <sup class="task__todo"> {{ miniTodo }} </sup>
    
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    },
    index: {
      type: Number
    }
  },

  computed: {
    miniTodo() {
      let todoSup = '';

      for (let i in this.task.todo) {
        todoSup += `${this.task.todo[i]} `;
        if (i > 1) {
          todoSup += ' ...';
          break;
        }
      }

      return todoSup;
    }
  },

  methods: {
    toggle() {
      console.log(this.checked);
    }
  }
  
}
</script>

<style lang="scss">
.task {
  position: relative;
  padding: 18px 30px;
  transition: 0.5s;
  border-bottom: 1px solid lightgray;

  &:hover {
    box-shadow: inset 0 0 4px 1px rgb(165, 165, 165);
    transition: 0.5s;
  }

  &__label {
    display: flex;
    justify-content: space-between;
  }

  &__checkbox {
    margin-top: 5px;
  }

  &__todo {
    /* чтоб не занимали место */
    position: absolute;
    color: gray;
    font-size: 70%;
  }

  .remove-task {
    
    &__delete {
      padding: 5px 30px;
      border-radius: 4px;
      background-color: rgb(231, 41, 41);
      }
  }
}


</style>