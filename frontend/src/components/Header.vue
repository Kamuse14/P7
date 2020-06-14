<template>
  <header>
	<div id="header">
		<img src="../assets/icon.png" alt="logo Groupomania"/>
		<h2> Groupomania </h2>
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
		background-color: var(--orange);
		display: flex;
		justify-content: space-around;
		margin: 0;
		height: 80px;
	}
	img {
		width: 8vh;
		height: 8vh;
		margin: auto 0;
	}
	h2 {
		font-size: 1.8em;
		}
	.signout {
		margin: auto 0;
	}
	.fa-sign-out-alt {
		font-size: 2.2em;
		color: var(--light-pink);
		cursor: pointer;
	}
	
	.onglet {
		position: fixed;
		top: 54px;
		right: 5%;
		list-style: none;
		width: 120px;
	}

</style>
