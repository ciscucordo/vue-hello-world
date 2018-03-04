import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: []
    },
    actions: {
        ADD_TODO: function ( { commit }, new_todo){
            var set_new = {
                todo: new_todo
            };
            commit('ADD_TODO', set_new);
        }
    },
    mutations: {
        ADD_TODO: function (state, new_todo) {
            state.todos.push(new_todo);
        }
    },
    getters: {
        todos: state => {
            return state.todos;
        }
    }
});

export default store