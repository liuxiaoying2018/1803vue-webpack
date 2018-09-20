<template>
    <div>
       <header class="main-header">
            <h1>Todo</h1>
        </header>

        <section class="real-app">
        <input type="text" class="add-input" placeholder="接下来要做什么？" @keyup.enter="addTodo" ref="ipt">
        <!-- v-model="inpt" -->
        <item 
            v-for="(todo,index) in todosView" 
            :key="index" 
            :todo="todo"
            @change-completed="changeCompleted"
            @delete-todo="deletTodo"
        ></item>
        <tabs
            :filter="filter"
            :left-items-count="leftItemsCount"
            :is-have-completed="isHaveCompleted"
            @toggle-filter="toggleFilter"
            @clear-completed="clearCompleted"
        ></tabs>
        </section>

        <footer id="footer">
            <span>written by Jacky</span>
        </footer>
    </div>
</template>

<script>
import Item from './components/Item.vue'
import Tabs from './components/Tabs.vue'
import "./style/app.scss"
export default {
    components:{
        Item,
        Tabs
    },
   data() {
       return {
           todos: [
            // {
            //   content: '吃饭',
            //   isCompleted: false
            // },
            // {
            //   content: 'coding',
            //   isCompleted: true
            // }
            ],
            filter: 'All'
       }
      },      
      computed:{
        leftItemsCount(){
          return this.todos.reduce( (t,v) => v.isCompleted ? t : t + 1 , 0)
          //{
            // if(!v.isCompleted){
            //   t++
            // }
            // return t
          //} )
        },
        todosView(){
          if(this.filter === 'All'){
            return this.todos
          } else if(this.filter === 'Active'){
            return this.todos.filter( v => !v.isCompleted )
          } else {
            return this.todos.filter( v => v.isCompleted )
          }
        },
        isHaveCompleted(){
          return this.todos.some(v=>v.isCompleted)
        }
      },
      methods:{
        // addTodo(e){
        //   console.log(e.target.value)
        // },
        addTodo(){
          // console.log(this.$refs.ipt.value)
          this.todos.unshift({
            content:this.$refs.ipt.value,
            isCompleted: false
          })
          this.$refs.ipt.value = ""
        },
        changeCompleted(todo){
          //todo.isCompleted = !todo.isCompleted
          this.todos[this.todos.indexOf(todo)].isCompleted = !this.todos[this.todos.indexOf(todo)].isCompleted
        },
        deletTodo(todo){
          //this.todos.splice(this.todos.findIndex( item=> todo === item ),1)
          this.todos = this.todos.filter( item => item !== todo)
        },
        toggleFilter(filter){
          this.filter = filter
        },
        clearCompleted(){
          this.todos = this.todos.filter( item => !item.isCompleted )
        }
      },
      updated() {
        localStorage.setItem('filter',this.filter)
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      created() {
        if(localStorage.getItem('todos')){
          this.todos = JSON.parse(localStorage.getItem('todos'))
        }
        if(localStorage.getItem('filter')){
          this.filter = localStorage.getItem('filter')
        }
      } 
}
</script>

<style lang="scss">
    .app{
        p{
            font-size: 100px;
            color: red;
        }       
    }
</style>

