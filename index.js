Vue.component('adder', {
		template: '<div><input v-model="newTodo"><button v-on:click="clickButton">Afegeix Todo</button></div>',
		data: function() {
			return {
				newTodo: ''
			}
		},
		methods: {
			clickButton: function () {
				var todo = this.newTodo;
				this.$emit('todo-adding', todo);
			},
		}
	});



Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}<button v-on:click="clickButton(todo)">X</button></li>',
  methods: {
	  clickButton: function(todo) {
		  this.$emit('todo-deleting', todo);
	  }
  }
})



Vue.component('deleter', {
  template: '<button v-on:click="clickButton()">Delete All</button>',
  methods: {
	  clickButton: function() {
		  this.$emit('todo-deleting-all');
	  }
	}
});


var appComponent = new Vue({
  el: '#app-component',
  data: {
    todoList: [
      { text: 'Item 1' },
      { text: 'Item 2' },
			{ text: 'Item 3' },
    ]
  },
  methods: {  
	addTodo: function (todo) {
		console.log(todo);
		if (todo) {
			this.todoList.push({text: todo});
			this.newTodo = '';
		}
	},
	deleteTodo: function (todo) {
		var idx = this.todoList.indexOf(todo);
		this.todoList.splice(idx, 1);
	},
	deleteTodos: function () {
		this.todoList = new Array()
	}
  }
})