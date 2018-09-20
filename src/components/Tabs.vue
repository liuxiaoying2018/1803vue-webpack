<template>
    <div class="helper">
      <span class="left">{{leftItemsCount}} items left</span>
      <span class="tabs">
        <span 
          v-for="state in states"
          :class="{actived: filter === state}"
          @click="toggleFilter(state)"
          :key="state"
        >{{state}}</span>
      </span>
      <span 
        class="clear" 
        v-if="isHaveCompleted"
        @click="clearCompleted"
      >Clear Completed</span>

    </div>
  </template>

  <script>
  export default {
      props:['leftItemsCount','filter','isHaveCompleted'],
      data(){
        return {
          states:['All', 'Active', 'Completed']
        }
      },
      methods:{
        toggleFilter(filter){
          this.$emit('toggle-filter',filter)
        },
        clearCompleted(){
          this.$emit('clear-completed')
        }
      }
  }
  </script>

  <style lang="scss">
  
  </style>
  
  