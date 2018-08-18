<template>
  <div>
    <div class='ui centered card'>
      <div class='content' v-show="!isEditing">
        <div class='header'>
          Summary
        </div>
        <div class='meta'>
          Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}
          Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}
        </div>
      </div>
    </div>
    <todo v-on:delete-todo="deleteTodo"
          v-on:complete-todo="completeTodo"
          v-for="todo in todos" :key='todo.title' :todo.sync="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    createTodo(todo) {
      console.log('list created');
      this.todos.push(todo);
    },
  },
};

</script>

<style>

</style>
