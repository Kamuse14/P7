<template>
  <div id="app">

    <header-top></header-top>

    <router-view></router-view>

    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/forum">Forum</router-link> |
      <router-link to="/about">Groupomania</router-link>
    </div>

  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'header-top': Header
  }
};

</script>

<style>
/* Définition des couleurs dans tout le document*/
:root { 
  --light-pink: #ffd7d7;
  --orange: #fd2d01;
  --light-orange: #ffb4a4;
  --dark-orange: #641100;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  bottom: 0;
  padding-top: 1.5rem;
  background-color: var(--light-orange);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--orange);
}
/*/////////// RESPONSIVITY /////////////*/
/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  h2 {
    font-size: 2em;
  }
}


</style>
