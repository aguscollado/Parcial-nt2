<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1> PARCIAL </h1>
      <br>

      <barraNav />
      <router-view></router-view>


    </div>
  </div>
</template>

<script>
import barraNav from "./Componentes/navBar.vue";

export default {
  name: 'App',
  components: {
    barraNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
