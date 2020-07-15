<template>

  <li class="task" :id="'checked' + index">


    <div class="task__label" >
      <router-link 
          :to="{name: 'todo', params: {id: task.id}}"
      >{{ task.title }}</router-link>
      
      <div class="remove-task">
      <button class="btn btn__delete"
              @click="deleteRequest(task.id)"
      >Delete</button>
    </div>             
    </div>
    <sup class="task__todo"> {{ shortTodoList }} </sup>
    
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
    shortTodoList() {
      let todoSup = '';

      for (let i in this.task.todo) {
        todoSup += `${this.task.todo[i]} `;
        if (i > 1) {
          return todoSup += ' ...';
        }
      }
      return todoSup;
    }
  },

  methods: {

    deleteRequest(id) {
      this.$store.dispatch('TOGGLE_POPUP', id)
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

}


</style>