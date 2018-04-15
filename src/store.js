
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  actions: {
    ADD_TODO: function ADD_TODO({ commit }, newTodo) {
      const setNew = {
        todo: newTodo,
        status: false,
      };
      commit('ADD_TODO_MUTATION', setNew);
    },
    COMPLETE_TODO: function COMPLETE_TODO({ commit }, todo) {
      commit('COMPLETE_TODO_MUTATION', todo);
    },
  },
  mutations: {
    ADD_TODO_MUTATION: function ADD_TODO_MUTATION(state, newTodo) {
      state.todos.push(newTodo);
    },
    COMPLETE_TODO_MUTATION: function COMPLETE_TODO_MUTATION(state, todo) {
      state.todos.find(x => x.todo === todo).status = true;
    },
  },
  getters: {
    notDone: (state) => {
      const filtered = state.todos.filter(el => el.status === false);
      return filtered;
    },
    done: (state) => {
      const filtered = state.todos.filter(el => el.status === true);
      return filtered;
    },
  },
});

export default store;
