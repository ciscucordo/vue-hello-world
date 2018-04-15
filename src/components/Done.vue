
<template>
  <div>
    <div>
      <h1>Todos Completats</h1>
      <ul v-if="doneTodos">
        <li v-for="todo in doneTodos">{{todo.todo}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      doneTodos: function doneTodos() {
        return this.$store.getters.done;
      },
    },
  };
</script>
