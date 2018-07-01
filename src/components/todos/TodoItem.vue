<template>
  <li :class="itemClass">
    {{ todo.title }}
    <a v-if="!todo.completed" href="#" @click.prevent="onComplete">complete</a>    
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'todo-item',
  props: [
    'todo',
  ],
  computed: {
    itemClass(){
      return {
        'todo-item': true,
        completed: this.todo.completed,
      };
    }
  },
  methods: {
    ...mapActions([
      'completeTodo',
    ]),
    onComplete(){
      this.completeTodo(this.todo.id);
    },
  },
};
</script>

<style scoped>
.todo-item{
  margin: 1rem 0;
  font-size: 16px;
}
.todo-item.completed{
  text-decoration: line-through;
}
</style>

