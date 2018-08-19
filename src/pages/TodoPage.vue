<template>
  <div>
    <todo-list v-bind:todos="todos" v-bind:username="this.$route.params.username"></todo-list>
    <create-todo v-on:add-todo="addTodo" v-on:create-todo="createTodo"/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

export default {
  name: 'TodoPage',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        desc: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        desc: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        desc: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        desc: 'Project D',
        done: false,
      }],
    };
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        title,
        done: false,
      });
    },
    createTodo(todo) {
      console.log('App created');
      this.todos.push(todo);
    },
  },
};
</script>

<style scoped>

</style>
