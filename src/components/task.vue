<template>
  <li class="task" :id="'checked' + index">
    <label class="task__label" >
      <router-link :to="{name: 'todo', params: {id: index + 1}}">{{ task.title }}</router-link>
      
      <input class="task__checkbox"
             :for="'checked' + index"
             type="checkbox" 
             @click="toggle(index)">
      
    </label>
    <sup class="task__todo"> {{ miniTodo }} </sup>
    
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number
    }
  },

  computed: {
    miniTodo() {
      let todoSup = '';

      for (let i in this.task.todo) {
        todoSup += `${this.task.todo[i]}, `;
        if (i >= 2) {
          todoSup += ' ...'
          break
        }
      }

      return todoSup;
    },

    selected() {
      return 1
    }
  },

  methods: {
    toggle(index) {
      console.log(index);
    }
  }
  
}
</script>

<style lang="scss">
.task {
  // height: 50px;
  padding: 18px 30px;
  transition: 0.5s;
  border-bottom: 1px solid lightgray;

  &:hover {
    box-shadow: inset 0 0 5px 5px rgb(165, 165, 165);
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
}
</style>