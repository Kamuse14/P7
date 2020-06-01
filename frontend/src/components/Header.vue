<template>
  <header>
    <img src="../assets/icon.png" alt="logo Groupomania"/>
    <h2>{{ msg }}</h2>
  </header>
</template>

<script>
	export default {
		name: "Header",
		props: {
			msg: String,
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
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
  
</style>