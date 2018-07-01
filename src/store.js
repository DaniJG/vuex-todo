import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // each todo has { id, title, completed } properties
    todos: [],
  },
  getters: {
    incompleteCount: state => {
      return state.todos.filter(todo => !todo.completed).length;
    },
  },
  mutations: {
    completeTodo(state, todoId){
      const todo = state.todos.find(todo => todo.id === todoId);
      todo.completed = true;
    },
    addTodo(state, todo){
      state.todos = [todo, ...state.todos];
    },
    setTodos(state, todos){
      state.todos = todos;
    },
  },
  actions: {
    completeTodo({commit}, todoId){
      return axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(() => {        
        commit('completeTodo', todoId);
      });
    },
    addTodo({commit, state}, todo){
      return axios.post('https://jsonplaceholder.typicode.com/todos').then(response => {        
        commit('addTodo', {
          title: todo.title, 
          completed: false, 
          // ignore response id, it always return id=201 which isnt really created in the server so we get 404 when trying to complete it
          id: state.todos.length,
        });
      });
    },
    loadTodos({commit}){
      return axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        // get just the first 10 and commit them to the store
        const todos = response.data.slice(0, 10);
        commit('setTodos', todos);
      });
    },
  },
});
