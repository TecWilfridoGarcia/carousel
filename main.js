new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    },
      removeTodo(id) {
     // this.todos = this.todos.filter(todo => todo.id !== id)
      //localStorage.removeItem('todos', JSON.stringify(this.todo));
      alert('aun no tiene esta funcionalidad')
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
