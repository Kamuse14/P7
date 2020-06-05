<template>
  <header>
	<div id="header"><img src="../assets/icon.png" alt="logo Groupomania"/><h2> Tweetomania </h2><i class="fas fa-sign-out-alt" @click="toggleMenu=!toggleMenu"></i>
	</div>

	<ul class="menu">
		<li class="btn"><router-link to="/" exact>Accueil</router-link></li>
		<li class="btn"><router-link to="/forum">Forum</router-link></li>
	</ul>

  </header>
</template>

<script>
	export default {
		name: "Header"
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#header {
		background-color: #FD2D01;
		margin-top: 0.5rem;
		display: flex;
		justify-content: space-around;
		margin: 0;
	}
	img {
		width: 8vh;
		height: 8vh;
		margin: auto 0;
	}
	i {
		font-size: 2.2em;
		color: #FFD7D7;
		margin: auto 0;
		cursor: pointer;
	}
	.menu {
		display: none;
		position: fixed;
		right: 0;
		width: 150px;
		border: 1px solid #641100;
	}
	.btn {
		list-style: none;
		border: 1px solid #641100;
		background-color: #FFB4A4;
		padding: 0.5rem;
		cursor: pointer;
	}
  
</style>
