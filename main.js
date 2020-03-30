new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
      } else {
        return false;
      }
    },
    removeTodo(id) {
      this.todos.splice(id, 1);
    }
  },
  mounted() {
    console.log('App mounted!');
    if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
  },
  watch: {
    todos: {
      handler() {
        console.log('Todos changed!');
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
});
