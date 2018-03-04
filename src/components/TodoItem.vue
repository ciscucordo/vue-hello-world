<template>
    <div>
        <h1>Todos</h1>
        <input type="text" v-model="adder">
        <button @click="add_todo">Add Todo</button>
        <hr>
        <ul v-if="todos">
            <li v-for="todo in todos">
                <label>{{todo.todo}}</label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'todos',
        data () {
            return {
                adder: ''
            }
        }, 
        methods: {
            add_todo: function(){
                this.$store.dispatch('ADD_TODO', this.adder);
                this.adder = '';
            }
        },
        computed: {
            todos: function(){
                return this.$store.getters.todos;
            }
        }
    }
</script>