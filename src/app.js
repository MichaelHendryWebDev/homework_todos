import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
      "post letter",
      "feed dog",
      "paint door"
    ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push(this.newItem);
        this.newItem = "";
      }
    }
    });
  });
