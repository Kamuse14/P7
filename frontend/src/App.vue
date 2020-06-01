<template>
  <div id="app">
    <div id="header">
      <Header msg="Groupomania"/>
    </div>

    <div id="nav">
      <Login msg="Communiquez avec Tweetomania"/>

      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">Groupomania</router-link>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Header,
    Login
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: center no-repeat url("./assets/icon.svg");
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FD2D01;
}
</style>
