<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>


import header from './components/header.vue';
import {mapActions, mapGetters} from './store/store.js';


export default {
  name: "App",
  components: {

    'app-header': header,
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS'
    ])
  },
  mounted() {
    this.GET_PRODUCTS();
  },
  created: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
