<template>
  <header>
	<div id="header">
		<img src="../assets/icon.png" alt="logo Groupomania"/>
		<h2> Tweetomania </h2>
		<div class="signout">
			<router-link to="/" exact>
				<i class="fas fa-sign-out-alt"></i>
			</router-link>
		</div>
	</div>
  </header>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				
			}
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
		height: 70px;
	}
	img {
		width: 8vh;
		height: 8vh;
		margin: auto 0;
	}
	.signout {
		margin: auto 0;
	}
	.fa-sign-out-alt {
		font-size: 2.2em;
		color: #FFD7D7;
		cursor: pointer;
	}
	.onglet {
		position: fixed;
		top: 54px;
		right: 5%;
		list-style: none;
		width: 120px;
	}
	a {
		text-decoration: none;
		color: var(--dark-orange);
	}
	a:hover, a:active {
		color: var(--light-pink);
	}
</style>
