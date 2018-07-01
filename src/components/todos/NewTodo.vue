<template>
  <div class="new-todo">
    <input type="text" v-model="title" />
    <a href="#" @click.prevent="onAdd">add to the list</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'new-todo',
  data(){
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions([
      'addTodo',
    ]),
    onAdd(){
      this.addTodo({title: this.title}).then(() => {
        this.title = '';
      });
    },
  },
};
</script>

<style scoped>
.new-todo a{
  margin-left: 10px;
}
</style>

