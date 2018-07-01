<template>
  <ul class="todo-list">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from './TodoItem.vue';

export default {
  name: 'todo-list',
  components: {
    TodoItem,
  },
  computed: {
    ...mapState([
      'todos',
    ]),
  },
};
</script>

<style scoped>
.todo-list{
  list-style: none;
}
</style>

