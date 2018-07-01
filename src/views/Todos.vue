<template>
  <div class="todos">
    <h1>This is my list of things TODO</h1>
    <h3>I still have {{incompleteCount}} things to be completed!</h3>
    <new-todo />
    <todo-list />
  </div>
</template>

<script>
import NewTodo from '@/components/todos/NewTodo.vue';
import TodoList from '@/components/todos/TodoList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'todos',
  components: {
    NewTodo,
    TodoList,
  },
  created() {
    this.loadTodos();
  },
  computed: {
    ...mapGetters([
      'incompleteCount',
    ]),
  },
  methods: {
    ...mapActions([
      'loadTodos',
    ]),
  },
};
</script>
