import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
      {name: "post letter", done: false},
      {name: "feed dog", done: true},
      {name: "paint door", done: false}
    ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push({
          name: this.newItem,
          done: false
        });
        this.newItem = "";
      },
      doItem: function(index) {
        this.todos[index].done = true;
      }
    }
    });
  });
