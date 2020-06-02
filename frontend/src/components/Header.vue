<template>
  <header>
    <div id="header"><img src="../assets/icon.png" alt="logo Groupomania"/><h2>{{ msg }}</h2><i class="far fa-user" @click="toggleMenu=!toggleMenu"></i>
    </div>
    <ul class="menu" :class="{ menu: toggleMenu }">
    <!-- <li class="itemMenu" v-for="item in menuDeroulant" > {{ item }} </li>  -->   
    </ul>
  </header>
</template>

<script>
	export default {
		name: "Header",
		// data: {
		// 	menuDeroulant : ["Se connecter", "S'inscrire", "Se déconnecter", "Supprimer son compte"],
		// 	toggleMenu: false
		// },
		// 
		// data() {
		// 	return {
		// 		menuDeroulant : ["Se connecter", "S'inscrire", "Se déconnecter", "Supprimer son compte"],
		// 		toggleMenu: false	
		// 	}
		// },
		props: {
			msg: String,	
		}
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
	/*.menu {
		display: none;
		position: fixed;
		right: 0;
		width: 150px;
		border: 1px solid #641100;
	}
	.itemMenu {
		list-style: none;
		border: 1px solid #641100;
		background-color: #FFB4A4;
		padding: 0.5rem;
		cursor: pointer;
	}*/

  
</style>