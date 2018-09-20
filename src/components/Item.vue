<template>
    <div class="todo-item" :class="{'completed': todo.isCompleted}">
      <input 
        type="checkbox"
        class="toggle"        
        :value="todo.isCompleted"
        :checked="todo.isCompleted"
        @change="handlerClick"
      >
      <!-- v-model="todo.isCompleted" -->
      <label>{{todo.content}}</label>
      <button @click="deletTodo" class="destory">X</button>
    </div>
</template>

<script>
export default {
      props: {
        todo:{
          type: Object,
          required: true
        }
      },
      methods:{
        handlerClick(){
          this.$emit('change-completed',this.todo)
        },
        deletTodo(){
          this.$emit('delete-todo',this.todo)
        }
      }
}
</script>

<style lang="scss">

</style>

