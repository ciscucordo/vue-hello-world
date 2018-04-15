
<template>  
  <div>
    <h1>Todos a Realitzar</h1>
    <input type="text" v-model="inputAdder">
    <button :disabled="inputAdder==''" @click="addTodo">Afegir Todo</button>
    <ul v-if="notDoneTodos">
      <li v-for="todo in notDoneTodos">
        <div>
          <input type="button" @click="doneTodo(todo.todo)" :value="todo.todo" />
        </div>
      </li>
    </ul>
    <div v-if="notDoneTodos">
      <strong>
	    <span>{{notDoneTodos.length}}</span>
      </strong> Todos Pendents
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pending',
    data() {
      return { inputAdder: '' };
    },
    methods: {
      addTodo: function addTodo() {
        this.$store.dispatch('ADD_TODO', this.inputAdder);
        this.inputAdder = '';
      },
      doneTodo: function doneTodo(todo) {
        this.$store.dispatch('COMPLETE_TODO', todo);
      },
    },
    computed: {
      notDoneTodos: function notDoneTodos() {
        return this.$store.getters.notDone;
      },
    },
  };
</script>
